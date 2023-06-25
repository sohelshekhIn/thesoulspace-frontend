"use client";

import { useStateContext } from "@/context/StateContext";
import Link from "next/link";

const CartSummary = () => {
  const { totalPrice, offer, setOffer, shippingCharge } = useStateContext();
  const calculateDiscount: any = (offer: any) => {
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

  let total = 0;
  let discount = calculateDiscount(offer);
  total = totalPrice - calculateDiscount(offer) + shippingCharge;
  if (totalPrice === 0) total = 0;
  if (total < 0) setOffer({});

  return (
    <div className="">
      <div className="w-full flex gap-3">
        <h4 className="text-xl font-semibold">Summary</h4>
        <button className="text-gray-500">
          <Link href="/cart">Edit Cart</Link>
        </button>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <div className="w-full flex justify-between">
          <p>Subtotal</p>
          <p>
            {totalPrice === 0 ? "-" : `₹ ${Math.round(totalPrice * 100) / 100}`}
          </p>
        </div>
        {offer && offer.valid ? (
          <div className="w-full flex justify-between">
            <p>
              Discount (
              {offer && offer.valid && offer.offerType === "Flat"
                ? "Flat"
                : offer && offer.valid && offer.discountPercentage + "%"}
              )
            </p>
            <p>- ₹ {discount}</p>
          </div>
        ) : (
          <></>
        )}

        <div className="w-full flex justify-between">
          <p>Shipping</p>
          <p>₹ 40</p>
        </div>
        <div className="w-full flex justify-between border-t-[2px] pt-3  border-t-gray-200 font-semibold">
          <p>Grand Total</p>
          <p>₹ {total}</p>
        </div>
      </div>
    </div>
  );
};

export { CartSummary };
