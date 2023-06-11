"use client";

import { useStateContext } from "@/context/StateContext";
import Image from "next/image";
import Link from "next/link";
import { CartProductType } from "@/types/GlobalTypes";

export const CheckoutItemsContainer = () => {
  const { totalQuantity } = useStateContext();

  if (totalQuantity === 0) {
    return (
      <div className="w-full p-10 h-[30dvh]">
        <div className="w-full text-center">
          <h1 className="text-3xl font-semibold">Your bag is empty.</h1>
          <p>Browse our collection and find something your love!</p>
        </div>
        <div className="w-full py-5 flex justify-center">
          <Link
            className="w-full lg:w-fit bg-gray-200 text-black text-sm p-4 rounded-lg text-center"
            href={"/shop/"}
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }
  return <CheckoutItems />;
};

const CheckoutItems = () => {
  const { cartItems } = useStateContext();
  return (
    <div className="flex flex-col gap-1 w-full lg:w-2/3 p-3 pb-11 border-b-[2px] border-b-gray-200">
      {cartItems.map((item: any) => (
        <CheckoutProduct product={item} key={item.id} />
      ))}
    </div>
  );
};

const CheckoutProduct = ({ product }: { product: CartProductType }) => {
  return (
    <div className="flex gap-1 w-full px-2">
      <div className="w-[70px] h-[50px] lg:w-[100px] lg:h-[100px] bg-gray-200">
        <Image
          src={
            // @ts-ignore
            product.Product_Image[0].formats.thumbnail.url
          }
          width={70}
          height={70}
          alt="Product Image"
        />
      </div>
      {/* list of items added in cart */}
      <div className="flex justify-between h-fit w-full gap-3">
        <div className="w-2/3">
          <h1 className="text-base break-words">{product.Name}</h1>
        </div>
        <div className="w-1/3">
          <p className="font-semibold text-right">₹ {product.Total_Price}</p>
        </div>
      </div>
    </div>
  );
};
