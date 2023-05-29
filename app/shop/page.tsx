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
      <div className="flex flex-wrap mt-3 justify-center gap-5 p-3">
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
const ProductCard = ({ product }: { product: ProductProps }) => {
  return (
    <Link
      href={`/shop/${product.attributes.slug}-${product.id}`}
      className="hover:scale-105 rounded-xl p-3 max-w-[80%] hover:bg-gray-100 transition-all duration-200 flex flex-col gap-2 noSelect"
    >
      <div className="rounded-xl overflow-hidden">
        <Image
          width={300}
          height={300}
          src={
            product.attributes.Product_Image.data[0].attributes.formats.small
              .url
          }
          alt="pr1"
          className=""
        />
      </div>
      <div className="px-2 flex flex-col gap-2">
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
