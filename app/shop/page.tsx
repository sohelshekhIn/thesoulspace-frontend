import TitleDivider from "@/components/Global/Divider";
import { getStaticData } from "@/utils/global";
import ShopProductCard from "@/components/Shop/ShopCard";

const Shop = async () => {
  const data = await getStaticData("/products?populate=deep,3");
  return (
    <div className="w-full">
      <div className="flex flex-col align-middle justify-center mt-3">
        <h1 className="text-center text-gray-800 font-bold text-4xl">Shop</h1>
        <TitleDivider />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-1 w-full lg:w-[90dvw] lg:mx-auto justify-items-center gap-7 p-3 sm:px-10">
        {data.map((product: any) => (
          <ShopProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
