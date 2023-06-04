"use client";

import Image from "next/image";
import { IndividualCartProductInputComp } from "./CartInputComp";
import { useStateContext } from "@/context/StateContext";
import Link from "next/link";

const CartItems = () => {
  const { cartItems } = useStateContext();
  return (
    <div className="flex flex-col gap-4 w-full lg:w-2/3 p-3 pb-11 border-b-[2px] border-b-gray-200">
      {cartItems.map((item: any) => (
        <CartProduct product={item} key={item.id} />
      ))}
    </div>
  );
};

const CartHeader = () => {
  const { totalQuantity, totalPrice } = useStateContext();
  if (totalQuantity === 0) return <></>;
  return (
    <p className="text-center">
      {totalQuantity} items | ₹ {totalPrice}
    </p>
  );
};

const CartContainer = () => {
  const { totalQuantity } = useStateContext();

  if (totalQuantity === 0) {
    return (
      <div className="w-full p-10 h-[30dvh]">
        <div className="w-full text-center">
          <h1 className="text-3xl font-semibold">Your bag is empty.</h1>
          <p>Browsr our collection and find something your love!</p>
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
  return <CartItems />;
};

type CartProductType = {
  id: number;
  quantity: number;
  Total_Price: number;
  attributes: {
    Name: string;
    Price: number;
    Product_Image: {
      data: {
        attributes: {
          formats: {
            thumbnail: {
              url: string;
            };
          };
        };
      }[];
    };
  };
};

const CartProduct = ({ product }: { product: CartProductType }) => {
  return (
    <div className="flex gap-3 w-full px-4 py-1">
      <div className="w-[130px] lg:w-[100px] lg:h-[100px] h-[100px] bg-gray-200">
        <Image
          src={
            product.attributes.Product_Image.data[0].attributes.formats
              .thumbnail.url
          }
          width={150}
          height={150}
          alt="Product Image"
        />
      </div>
      {/* list of items added in cart */}
      <div className="flex gap-3 flex-col sm:flex-row w-[70%] sm:justify-between">
        <div className="flex flex-col gap-1">
          <h1 className="text-lg">{product.attributes.Name}</h1>
          {/* <p className="text-sm">Product Description</p> */}
          <p className="font-semibold">₹ {product.Total_Price}</p>
        </div>

        <IndividualCartProductInputComp
          productId={product.id}
          quantity={product.quantity}
        />
      </div>
    </div>
  );
};

export { CartContainer, CartHeader };
