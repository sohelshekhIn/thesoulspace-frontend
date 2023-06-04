import { star } from "@/public/icons";
import Image from "next/image";
import Link from "next/link";
import { AddToCartButton } from "./ShopButtons";

interface ProductProps {
  id: number;
  attributes: {
    Name: string;
    Price: number;
    Short_Description: string;
    slug: string;
    Product_Image: {
      data: {
        attributes: {
          formats: {
            small: {
              url: string;
            };
          };
        };
      }[];
    };
  };
}

const ShopProductCard = ({ product }: { product: ProductProps }) => {
  return (
    <div className="w-[300px] noSelect">
      <div className="p-2 transition-all duration-200">
        <Image
          src={
            product.attributes.Product_Image.data[0].attributes.formats.small
              .url
          }
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
          href={`/shop/${product.attributes.slug}-${product.id}`}
          className="hover:text-yellow-600 truncate"
        >
          <h1 className="text-2xl lg:text-xl whitespace-normal">
            {product.attributes.Name}
          </h1>
        </Link>
        <p className="text-gray-500 truncate">
          {product.attributes.Short_Description}
        </p>
        <p className="font-semibold text-lg mt-2">
          &#x20B9; {product.attributes.Price}
        </p>
        <div className="py-2">
          <AddToCartButton product={product} small={true} />
        </div>
      </div>
    </div>
  );
};

export default ShopProductCard;