import Image from "next/image";
import Link from "next/link";
import TitleDivider from "../Global/Divider";
import { ProductCardType } from "@/types/GlobalTypes";

const BestSeller = ({ bestSellerData }: { bestSellerData: object[] }) => {
  return (
    <div className="mt-14">
      <div className="flex flex-col items-center w-full justify-center gap-5 mb-7">
        <h1 className="text-gray-800 font-bold text-4xl text-center">
          Best Sellers
        </h1>
        <TitleDivider />
      </div>
      <div className="mt-3 flex justify-center flex-wrap w-full gap-8 md:gap-5">
        {bestSellerData.map((product: any) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default BestSeller;

const ProductCard = ({ product }: { product: ProductCardType }) => {
  return (
    <div className="hover:scale-105 w-[300px] transition-all duration-200 p-3 flex flex-col gap-2">
      <div className="rounded-xl overflow-hidden">
        <Image
          width={300}
          height={300}
          src={product.Product_Thumbnail.data.attributes.formats.small.url}
          alt="pr1"
          className=""
        />
      </div>
      <div className="px-2">
        <Link
          href={`/shop/${product.product.data.attributes.slug}-${product.product.data.id}`}
          className="flex flex-col gap-2"
        >
          <span>
            <h2 className="text-lg font-semibold">
              {product.product.data.attributes.Name}
            </h2>
            <p className="text-sm text-gray-500">
              {product.product.data.attributes.Short_Description}
            </p>
          </span>
          <p className="text-lg font-semibold ">
            &#x20B9;{product.product.data.attributes.Price}
          </p>
        </Link>
      </div>
    </div>
  );
};
