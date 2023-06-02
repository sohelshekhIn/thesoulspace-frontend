import TitleDivider from "@/components/Divider";
import { logo_bg } from "@/public/images";
import Link from "next/link";
import Image from "next/image";
import { getStaticData } from "@/utils/api";

const Shop = async () => {
  const data = await getStaticData("/products?populate=deep,3", 60 * 2);
  console.log(data);
  return (
    <div className="w-full">
      <div className="flex flex-col align-middle justify-center">
        <h1 className="text-center text-gray-800 font-bold text-4xl">Shop</h1>
        <TitleDivider />
      </div>
      <div className="mt-3 grid grid-cols-4 gap-4 justify-items-center p-3">
        {data.map((product: any) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;

interface ProductProps {
  id: number;
  attributes: {
    Name: string;
    Price: number;
    Short_Description: string;
    slug: string;
    Product_Image: {
      data: [
        {
          attributes: {
            formats: {
              small: {
                url: string;
              };
            };
          };
        }
      ];
    };
  };
}
const ProductCardDemo = ({ product }: { product: ProductProps }) => {
  return (
    <Link
      href={`/shop/${product.attributes.slug}-${product.id}`}
      className="flex flex-col col-span-4 justify-center w-[70dvw] gap-2 hover:scale-105 rounded-xl p-3 hover:bg-gray-100 transition-all duration-200 noSelect"
    >
      <div className="rounded-xl overflow-hidden w-[400px] aspect-square">
        <Image
          src={
            product.attributes.Product_Image.data[0].attributes.formats.small
              .url
          }
          alt="pr1"
          className="object-fit"
        />
      </div>
      <div className=" flex flex-col gap-2">
        <span>
          <h2 className="text-2xl font-semibold">{product.attributes.Name}</h2>
          <p className="text-base text-gray-500">
            {product.attributes.Short_Description}
          </p>
        </span>
        <p className="text-lg font-semibold">
          &#x20B9;{product.attributes.Price}
        </p>
      </div>
    </Link>
  );
};

const ProductCard = ({ product }: { product: ProductProps }) => {
  return (
    <div className="col-span-4 p-5">
      <div className="p-2 bg-gray-200 rounded-xl">
        <Image
          src={
            product.attributes.Product_Image.data[0].attributes.formats.small
              .url
          }
          alt="pr1"
          width={400}
          className="rounded-xl"
          height={400}
        />
        {/* simple rating */}
        {/* red star */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-red-500"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            className="text-red-500"
            d="M10 3.333l2.879 5.86 6.438.937-4.677 4.555 1.104 6.427L10 15.667l-5.744 3.445 1.104-6.427L.683 9.13l6.438-.937L10 3.333z"
            clipRule="evenodd"
          />
        </svg>

        <Link
          href={`/shop/${product.attributes.slug}-${product.id}`}
          className="hover:text-yellow-600"
        >
          <h1 className="text-xl mt-5">{product.attributes.Name}</h1>
        </Link>
        <p className="text-gray-600 truncate">
          {product.attributes.Short_Description}
        </p>
        <p className="font-semibold text-lg mt-2">
          &#x20B9; {product.attributes.Price}
        </p>
      </div>
    </div>
  );
};
