// "use client";

import { getStaticData } from "@/utils/global";
import ShopProductCard from "@/components/Shop/ShopCard";
// import { getAlgoliaResults } from "@algolia/autocomplete-js";
// import algoliasearch from "algoliasearch";
// import { Autocomplete } from "@/components/Shop/Autocomplete";
// import { ProductItem } from "@/components/Shop/ProductItem";

// const searchClient = algoliasearch(
//   process.env.NEXT_PUBLIC_ALGOLIA_APP_ID!,
//   process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY!
// );

const Shop = async () => {
  const data = await getStaticData("/products?populate=deep,3");
  return (
    <div className="w-full pb-24">
      <div className="flex flex-col align-middle justify-center mt-8 mb-4 max-w-[80dvw] mx-auto">
        <h1 className="text-left text-gray-800 font-bold text-3xl">shop</h1>
      </div>
      {/* <Autocomplete
        openOnFocus={true}
        getSources={({ query }: { query: any }) => [
          {
            // what to have un sourceId for algolia

            sourceId: "links",
            getItems() {
              return getAlgoliaResults({
                searchClient,
                queries: [
                  {
                    indexName: "api::product.product",
                    query,
                  },
                ],
              });
            },
            templates: {
              item({ item, components }: { item: any; components: any }) {
                // return <ProductItem hit={item} components={components} />;
                return item.label;
              },
            },
          },
        ]}
      /> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full lg:w-[90dvw] lg:mx-auto justify-items-center gap-7 p-3 sm:px-10">
        {data.map((product: any) => (
          <ShopProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
export const dynamic = "force-dynamic";
