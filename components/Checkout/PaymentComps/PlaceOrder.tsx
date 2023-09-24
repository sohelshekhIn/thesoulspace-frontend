"use client";

import LoadingSpinner from "@/components/Global/LoadingSpinner";
import { showToast } from "@/components/Global/Toast";
import { useStateContext } from "@/context/StateContext";
import { useRouter } from "next/navigation";
import { useState } from "react";

const PlaceOrder = ({
  contactDetails,
  shippingAddress,
  userId,
}: {
  contactDetails: any;
  shippingAddress: any;
  userId: number;
}) => {
  const router = useRouter();
  const { cartItems, grandTotal, totalPrice, totalQuantity, offer } =
    useStateContext();

  const [loading, setLoading] = useState(false);

  // loop through cart items and create an array of product ids and quantities
  const products = cartItems.map((item: any) => {
    return {
      product: item.id,
      quantity: item.quantity,
      sizeDescription: item.sizeDescription,
    };
  });

  const order = {
    userId: userId,
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
    setLoading(true);

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
      console.log(data.error);
      setLoading(false);
      showToast(data.error.message, "error");
      return;
    } else {
      // redirect to payment page (other website)
      router.push(data.link);
    }
  };

  return (
    // button to place order for payments
    <button
      className="w-full bg-yellow-500 text-white p-4 rounded-md font-semibold"
      type="submit"
      onClick={() => createOrder(order)}
      disabled={loading}
    >
      <span className="flex w-full justify-center">
        {loading && <LoadingSpinner color="white" />}
        Place Order
      </span>
    </button>
  );
};

export default PlaceOrder;
