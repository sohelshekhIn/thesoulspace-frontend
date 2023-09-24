"use client";

import { useStateContext } from "@/context/StateContext";
import { ProductType } from "@/types/GlobalTypes";
import Link from "next/link";
import { showToast } from "../Global/Toast";
import { useEffect } from "react";

const AddToCartButton = ({
  product,
  small = false,
}: {
  product: ProductType;
  small?: boolean;
}) => {
  const { onAdd, qty, sizeDescription, setSizeDescription, setQty } =
    useStateContext();

  // On Add To Cart Button Load, empty sizeDescription state and set qty to 1
  useEffect(() => {
    setSizeDescription("");
    setQty(1);
  }, []);

  const handelAddToCartClick = () => {
    if (sizeDescription != "") {
      onAdd(product, qty);
      return;
    }
    showToast("Please select size/phone model", "error");
  };
  return (
    <button
      onClick={handelAddToCartClick}
      className={`bg-gray-300
        hover:bg-gray-400
      text-black w-1/2 max-w-[15rem] ${small ? "px-2 py-3" : "px-5 py-4"}`}
    >
      Add to Bag
    </button>
  );
};

const BuyNowButton = ({ product }: { product: ProductType }) => {
  const { onAdd, qty, sizeDescription } = useStateContext();

  const handleBuyNowClick = () => {
    if (sizeDescription != "") {
      onAdd(product, qty);
      return;
    }
    showToast("Please select size/phone model", "error");
  };

  return (
    <button
      onClick={handleBuyNowClick}
      className="bg-black hover:bg-gray-800 text-white w-1/2 max-w-[15rem] px-5 py-4"
    >
      {sizeDescription != "" ? (
        <Link href="/cart">Buy Now</Link>
      ) : (
        <p>Buy Now</p>
      )}
    </button>
  );
};
export { AddToCartButton, BuyNowButton };
