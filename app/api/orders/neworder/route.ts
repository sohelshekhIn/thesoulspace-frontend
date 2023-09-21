import { NextResponse } from "next/server";
import { RequestOptions } from "@/types/GlobalTypes";

const shippingFee: number = 40;

// generate url filter query for strapi
const generateURLFilterQuery = (
  products: { product: number; quantity: number }[]
): string => {
  let query = "";

  products.forEach((item, index) => {
    query += `filters[id][$in][${index}]=${item.product}&`;
  });

  if (query.length > 0) {
    query = `?${query.slice(0, -1)}`; // Remove the trailing '&' character
  }

  return query;
};

// calculate discount
const calculateDiscount = (
  { data: offer }: { data: any },
  totalPrice: number
) => {
  if (offer && offer.valid) {
    if (offer.offerType === "Flat") return offer.discountAmount;
    else {
      let discountAmount = (totalPrice * offer.discountPercentage) / 100;
      return discountAmount > offer.maxDiscount
        ? offer.maxDiscount
        : discountAmount;
    }
  }
  return 0;
};

// return error response
const ReturnError = (
  error: string = "Cart data has been manipulated. Please try again.",
  status: number = 400
) => {
  return NextResponse.json(
    {
      error: error,
    },
    {
      status: status,
    }
  );
};

export async function POST(request: Request) {
  const req = await request.json();
  const {
    firstName,
    lastName,
    email,
    phone,
    address,
    totalPrice,
    offer,
    totalQuantity,
    grandTotal,
    products,
  } = req;

  const urlFilterQuery = generateURLFilterQuery(products);
  const productsResponse = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/products${urlFilterQuery}`,
    {
      next: {
        revalidate: 600,
      },
    }
  );

  let offerData = null;
  // fetch data if offer is passed in request
  if (offer) {
    const offerResponse = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/offer/check`,
      {
        next: {
          revalidate: 600,
        },
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ offerCode: offer.offerCode }),
      }
    );
    offerData = await offerResponse.json();
  }

  // fetch both simultaneously
  const [{ data: productData }] = await Promise.all([
    productsResponse.json(),
    offerData ? Promise.resolve({ data: offerData }) : Promise.resolve(null),
  ]);

  if (offer && offerData.error) {
    return ReturnError();
  }

  // returns calculated total price and quantity from strapi data
  const { calculatedTotalPrice, calculatedTotalQuantity } = products.reduce(
    (
      acc: { calculatedTotalPrice: number; calculatedTotalQuantity: number },
      product: any
    ) => {
      const matchingProduct = productData.find(
        (p: any) => p.id === product.product
      );
      if (matchingProduct) {
        const totalPriceForProduct = matchingProduct.Price * product.quantity;
        return {
          calculatedTotalPrice: acc.calculatedTotalPrice + totalPriceForProduct,
          calculatedTotalQuantity:
            acc.calculatedTotalQuantity + product.quantity,
        };
      }
      return acc;
    },
    { calculatedTotalPrice: 0, calculatedTotalQuantity: 0 }
  );

  if (calculatedTotalPrice != totalPrice) {
    return ReturnError();
  }

  if (calculatedTotalQuantity != totalQuantity) {
    return ReturnError();
  }
  if (offer && offerData?.data?.valid) {
    if (
      calculatedTotalPrice -
        calculateDiscount(offerData, calculatedTotalPrice) +
        shippingFee !=
      grandTotal
    ) {
      return ReturnError();
    }
  } else {
    if (calculatedTotalPrice + shippingFee !== grandTotal) {
      return ReturnError();
    }
  }

  const refferenceId = Date.now();
  const orderId = refferenceId.toString(36);
  //   get current date and time (IST) till seconds
  const date = new Date();
  const dateIST = new Date(date.getTime());

  const dateISTString = dateIST.toLocaleString("en-US", {
    timeZone: "Asia/Kolkata",
  });

  // Payment Options for Instamojo
  // Convert BodyParams to a Record<string, string>
  // Generate Expiry Time for Payment Request
  const currentTime = new Date();
  // Add 5 minutes (300,000 milliseconds) to the current time
  const expirationTime = new Date(currentTime.getTime() + 5 * 60 * 1000);
  // Format the expiration time in the desired format
  const formattedExpiry = expirationTime.toISOString();

  const bodyParams: Record<string, string> = {
    amount: grandTotal.toString(),
    purpose: `Order #${orderId}`,
    buyer_name: `${firstName} ${lastName}`,
    email: email,
    phone: phone,
    redirect_url: `${process.env.NEXT_PUBLIC_BASE_URL}/orders/${orderId}`,
    webhook: `${process.env.INSTAMOJO_WEBHOOK_URL}/api/payment-webhook`,
    allow_repeated_payments: "true",
    send_email: "false",
    send_sms: "false",
    expires_at: formattedExpiry,
  };

  const headers = new Headers();
  headers.append("accept", "application/json");
  headers.append("content-type", "application/x-www-form-urlencoded");
  headers.append("X-Api-Key", process.env.INSTAMOJO_API_KEY || "");
  headers.append("X-Auth-Token", process.env.INSTAMOJO_AUTH_TOKEN || "");

  const options: RequestOptions = {
    method: "POST",
    headers: headers,
    body: new URLSearchParams(bodyParams),
  };

  const paymentReqResponse = await fetch(
    `${process.env.INSTAMOJO_API_URL}/payment-requests/`,
    options
  );
  const paymentReqData = await paymentReqResponse.json();

  if (paymentReqData.error) {
    console.log(paymentReqData.error);
    return NextResponse.json(
      {
        error: paymentReqData.error,
      },
      {
        status: 500,
      }
    );
  }

  const saveOrderResponse = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/up-orders`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + process.env.STRAPI_API_TOKEN,
      },
      body: JSON.stringify({
        data: {
          orderId: orderId,
          refferenceId: refferenceId.toString(),
          payment_id: paymentReqData.payment_request.id,
          dateTime: dateISTString,
          cart: products,
          contact: {
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone,
            address: address,
          },
          value: {
            totalPrice: totalPrice,
            offer: offer,
            totalQuantity: totalQuantity,
            grandTotal: grandTotal,
          },
        },
      }),
    }
  );

  const saveOrder = await saveOrderResponse.json();

  // const saveOrder: any = { data: "hello" };
  // console.log("Order Saved");

  if (saveOrder.error) {
    return NextResponse.json(
      {
        error: saveOrder.error,
      },
      {
        status: 500,
      }
    );
  }

  return NextResponse.json(
    {
      link: paymentReqData.payment_request.longurl,
    },
    {
      status: 200,
    }
  );
}
