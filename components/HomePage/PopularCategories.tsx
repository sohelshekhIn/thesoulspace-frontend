import { ProductCategoryCardType } from "@/types/GlobalTypes";
import Image from "next/image";
import Link from "next/link";

const PopularCategories = ({
  categoriesData,
}: {
  categoriesData: object[];
}) => {
  return (
    <div className="mt-16 lg:mt-32">
      <h1 className={`text-gray-800 font-bold text-3xl text-center`}>
        popular categories
      </h1>
      <div className="mt-5 flex justify-center flex-wrap w-[90dvw] mx-auto gap-5 p-3">
        {categoriesData.map((category: any) => (
          <ProductCard key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default PopularCategories;

const ProductCard = ({ category }: { category: ProductCategoryCardType }) => {
  return (
    <Link
      href={"/somewhere"}
      className="w-fit flex items-center hover:scale-110 transition-all duration-200"
    >
      <div className="relative overflow-hidden">
        <Image
          alt="Popular Categories"
          width={250}
          height={300}
          src={category.Icon.data.attributes.url}
        />
        <div className="absolute top-0 flex flex-col justify-end w-full h-[150%] transform translate-y-[-33%] bg-gradient-to-t from-black to-transparent opacity-100">
          <div className="flex flex-col gap-1 text-white p-10">
            <h1 className="font-semibold text-xl">{category.Title}</h1>
            {category.Description && (
              <p className="text-white/90 text-xs">{category.Description}</p>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};
