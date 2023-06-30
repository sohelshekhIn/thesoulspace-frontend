"use client";

import { useStateContext } from "@/context/StateContext";
import { ProductType } from "@/types/GlobalTypes";
import Link from "next/link";

const AddToCartButton = ({
  product,
  small = false,
}: {
  product: ProductType;
  small?: boolean;
}) => {
  const { onAdd, qty } = useStateContext();
  return (
    <button
      onClick={() => onAdd(product, qty)}
      className={`bg-gray-300
        hover:bg-gray-400
      text-black w-1/2 max-w-[15rem] ${small ? "px-2 py-3" : "px-5 py-4"}`}
    >
      Add to Bag
    </button>
  );
};

const BuyNowButton = ({ product }: { product: ProductType }) => {
  const { onAdd, qty } = useStateContext();
  return (
    <button
      onClick={() => onAdd(product, qty)}
      className="bg-black hover:bg-gray-800 text-white w-1/2 max-w-[15rem] px-5 py-4"
    >
      <Link href="/cart">Buy Now</Link>
    </button>
  );
};
export { AddToCartButton, BuyNowButton };
