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
      rounded-lg text-black w-1/2 ${small ? "px-2 py-3" : "px-5 py-4"}`}
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
      className="bg-black rounded-lg text-white w-1/2 px-5 py-4"
    >
      <Link href="/cart">Buy Now</Link>
    </button>
  );
};
export { AddToCartButton, BuyNowButton };
