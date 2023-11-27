"use client";

import { getStaticData } from "@/utils/global";
import ShopProductCard from "@/components/Shop/ShopCard";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import LoadingShopProducts from "../../components/Shop/LoadingSkeleton";

const Shop = () => {
  const searchParams = useSearchParams();
  const [data, setData] = useState([]);

  const category = searchParams.get("category");
  // if category is not null then we will fetch data based on category
  // else we will fetch all the data
  console.log(category);
  useEffect(() => {
    const fetchData = async () => {
      let requestUrl = "/products";
      if (category != null) {
        requestUrl = `/products?category=${category}`;
      }
      const res = await getStaticData(requestUrl, 3600);
      console.log(res);
      setData(res);
    };
    fetchData();
  }, [category]);

  return (
    <div className="w-full pb-24">
      {/* if data.length === 0 then show loading skeleton else show products */}
      {data.length === 0 ? (
        <LoadingShopProducts />
      ) : (
        <>
          <div className="flex flex-col align-middle justify-center mt-8 mb-4 max-w-[80dvw] mx-auto">
            <h1 className="text-left text-gray-800 font-bold text-3xl">shop</h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full lg:w-[90dvw] lg:mx-auto justify-items-center gap-7 p-3 sm:px-10">
            {data.map((product: any) => (
              <ShopProductCard key={product.id} product={product} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Shop;
export const dynamic = "force-dynamic";
