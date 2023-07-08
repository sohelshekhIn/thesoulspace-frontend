import Image from "next/image";
import Link from "next/link";
import TitleDivider from "../Global/Divider";
import { ProductCardType } from "@/types/GlobalTypes";

const BestSeller = ({ bestSellerData }: { bestSellerData: object[] }) => {
  return (
    <div className="mt-20">
      <div className="flex flex-col items-center w-full justify-center gap-5 mb-2">
        <h1 className="text-gray-900 font-bold text-3xl text-center">
          featured products
        </h1>
      </div>
      <div className="mt-3 flex items-center justify-center flex-col lg:flex-row gap-8 md:gap-5">
        {bestSellerData.map((product: any) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default BestSeller;

const ProductCard = ({ product }: { product: ProductCardType }) => {
  return (
    <div className="w-[300px] flex-shrink-0 transition duration-200 p-3 flex flex-col gap-2">
      <Link
        href={`/shop/${product.product.data.attributes.slug}-${product.product.data.id}`}
        className="flex flex-col gap-2 min-h-[80%]"
      >
        <div className="relative overflow-hidden">
          <Image
            width={300}
            height={300}
            src={product.Product_Thumbnail.data.attributes.formats.small.url}
            alt="pr1"
            className="h-full"
          />
          <div className="transition duration-200 opacity-0 hover:opacity-100 absolute top-0 bg-black/70 w-full h-full">
            <p className="mt-[95%] text-white text-sm font-semibold text-center hover:underline">
              View Product
            </p>
          </div>
        </div>
      </Link>
      <div className="">
        <span>
          <h2 className=" text-base font-normal">
            {product.product.data.attributes.Name}
          </h2>
          {/* <p className="text-sm text-gray-500 line-clamp-2">
            {product.product.data.attributes.Short_Description}
          </p> */}
        </span>
        <p className="text-sm font-semibold mt-2">
          &#x20B9;{product.product.data.attributes.Price}
        </p>
      </div>
    </div>
  );
};
