"use client";

import { useStateContext } from "@/context/StateContext";

const CartSummary = () => {
  const { totalPrice, offer, setOffer } = useStateContext();
  const calculateDiscount = (offer: any) => {
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

  let shippingCharge = 40;
  let total = 0;
  let discount = calculateDiscount(offer);
  total = totalPrice - calculateDiscount(offer) + shippingCharge;
  if (totalPrice === 0) total = 0;
  if (total < 0) setOffer({});

  return (
    <div className="">
      <div className="w-full">
        <h4 className="text-xl font-normal">Summary</h4>
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
          <p>Total</p>
          <p>₹ {total}</p>
        </div>
      </div>
      <div className="mt-5 bg-white fixed lg:static lg:p-0 w-full bottom-0 right-0 p-3">
        <button className="w-full py-4 bg-black text-white rounded-lg">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartSummary;
