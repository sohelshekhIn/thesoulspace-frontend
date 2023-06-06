import { star } from "@/public/icons";
import Image from "next/image";
import Link from "next/link";
import { AddToCartButton } from "./ShopButtons";
import { ProductType } from "@/types/GlobalTypes";

const ShopProductCard = ({ product }: { product: ProductType }) => {
  return (
    <div className="w-[300px] noSelect">
      <div className="p-2 transition-all duration-200">
        <Image
          src={product.Product_Image[0].formats.small.url}
          alt="pr1"
          width={300}
          height={300}
          className="rounded-xl"
        />
        <div className="my-2 flex gap-1">
          <div className="">
            <Image src={star} width={14} height={14} alt="Product Rating" />
          </div>
          <p className="text-sm">4/5</p>
        </div>
        <Link
          href={`/shop/${product.slug}-${product.id}`}
          className="hover:text-yellow-600 truncate"
        >
          <h1 className="text-2xl lg:text-xl whitespace-normal">
            {product.Name}
          </h1>
        </Link>
        <p className="text-gray-500 truncate">{product.Short_Description}</p>
        <p className="font-semibold text-lg mt-2">&#x20B9; {product.Price}</p>
        <div className="py-2">
          <AddToCartButton product={product} small={true} />
        </div>
      </div>
    </div>
  );
};

export default ShopProductCard;
