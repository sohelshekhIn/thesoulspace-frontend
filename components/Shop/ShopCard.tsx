import { star } from "@/public/icons";
import Image from "next/image";
import Link from "next/link";
import { ProductType } from "@/types/GlobalTypes";

const ShopProductCard = ({ product }: { product: ProductType }) => {
  return (
    <div className="w-[280px] noSelect">
      <Link href={`/shop/${product.slug}-${product.id}`}>
        <Image
          src={product.Product_Image[0].formats.small.url}
          alt="pr1"
          width={280}
          height={300}
        />

        <div className="my-2 flex gap-1">
          <div className="">
            <Image src={star} width={14} height={14} alt="Product Rating" />
          </div>
          <p className="text-sm">4/5</p>
        </div>

        <h1 className="text-xl font-semibold">{product.Name}</h1>
        <p className="text-gray-700 text-base line-clamp-2">
          {product.Short_Description}
        </p>
        <p className="font-semibold text-lg mt-2">&#x20B9; {product.Price}</p>
      </Link>
    </div>
  );
};

export default ShopProductCard;
