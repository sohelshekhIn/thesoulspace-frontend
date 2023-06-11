"use client";

import { useStateContext } from "@/context/StateContext";
import { minus, plus } from "@/public/icons";
import Image from "next/image";

const CartInputComp = () => {
  const { incQty, decQty, qty } = useStateContext();
  return (
    <div className="flex items-center noSelect">
      <button
        onClick={decQty}
        className="w-9 h-9 flex justify-center items-center rounded-full focus:outline-none bg-gray-200 hover:bg-gray-300"
      >
        <Image className="w-3 h-3" alt="minus" src={minus} />
      </button>
      <span className="px-3 text-lg">{qty}</span>
      <button
        onClick={incQty}
        className="w-9 h-9 flex justify-center items-center rounded-full focus:outline-none bg-gray-200 hover:bg-gray-300"
      >
        <Image className="w-3 h-3" alt="plus" src={plus} />
      </button>
    </div>
  );
};

const IndividualCartProductInputComp = ({
  productId,
  quantity,
}: {
  productId: number;
  quantity: number;
}) => {
  const { toggleCartItemQuantity } = useStateContext();
  return (
    <div className="flex items-center noSelect">
      <button
        onClick={() => toggleCartItemQuantity(productId, "dec")}
        className="w-9 h-9 flex justify-center items-center rounded-full focus:outline-none bg-gray-200 hover:bg-gray-300"
      >
        <Image className="w-3 h-3" alt="minus" src={minus} />
      </button>
      <span className="px-3 text-lg">{quantity}</span>
      <button
        onClick={() => toggleCartItemQuantity(productId, "inc")}
        className="w-9 h-9 flex justify-center items-center rounded-full focus:outline-none bg-gray-200 hover:bg-gray-300"
      >
        <Image className="w-3 h-3" alt="plus" src={plus} />
      </button>
    </div>
  );
};

export { CartInputComp, IndividualCartProductInputComp };
