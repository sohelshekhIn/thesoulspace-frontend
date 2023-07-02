"use client";

import { useStateContext } from "@/context/StateContext";
import { useRouter } from "next/navigation";

const PlaceOrder = ({
  contactDetails,
  shippingAddress,
}: {
  contactDetails: any;
  shippingAddress: any;
}) => {
  const router = useRouter();
  const { cartItems, grandTotal, totalPrice, totalQuantity, offer } =
    useStateContext();

  // loop through cart items and create an array of product ids and quantities
  const products = cartItems.map((item: any) => {
    return {
      product: item.id,
      quantity: item.quantity,
    };
  });

  const order = {
    firstName: contactDetails.firstName,
    lastName: contactDetails.lastName,
    email: contactDetails.email,
    phone: contactDetails.phone,
    address: {
      line1: shippingAddress.addressLine1,
      line2: shippingAddress.addressLine2,
      landmark: shippingAddress.landmark,
      city: shippingAddress.city,
      state: shippingAddress.state,
      pincode: shippingAddress.pincode,
    },
    totalPrice: totalPrice,
    offer: offer,
    totalQuantity: totalQuantity,
    grandTotal: grandTotal,
    products: products,
  };

  // api call to create order "/orders/neworder"
  const createOrder = async (order: any) => {
    console.log("Create order started");

    const res = await fetch("/api/orders/neworder", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(order),
    });
    const data = await res.json();
    console.log(data);

    if (data.error) {
      router.push(`/`);
    } else {
      router.push(`/orders/${data.orderId}-${data.refferenceId}`);
    }
  };

  return (
    // button to place order for payments
    <button
      className="w-full bg-yellow-500 text-white p-4 rounded-md font-semibold"
      type="submit"
      onClick={() => createOrder(order)}
    >
      Place Order
    </button>
  );
};

export default PlaceOrder;
