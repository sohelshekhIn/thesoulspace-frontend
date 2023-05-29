import { canvasPainting } from "@/public/images";
import Image from "next/image";
import Link from "next/link";

const PopularCategories = ({
  categoriesData,
}: {
  categoriesData: object[];
}) => {
  return (
    <div className="mt-16 lg:mt-32">
      <div className="flex items-center w-full justify-center gap-5 mb-7">
        <span className="h-[2px] px-3 bg-yellow-200 w-[15%]"></span>
        <h1 className={`text-gray-800 font-bold text-4xl text-center`}>
          Popular Categories
        </h1>
        <span className="h-[2px] px-3 bg-yellow-200 w-[15%]"></span>
      </div>
      <div className="mt-3 flex justify-center flex-wrap w-[90dvw] mx-auto gap-5 p-3">
        {categoriesData.map((category: any) => (
          <ProductCard key={category._id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default PopularCategories;

interface CategoryProps {
  Title: string;
  Description: string;
  Icon: {
    data: {
      attributes: {
        formats: {
          thumbnail: {
            url: string;
          };
        };
      };
    };
  };
}
const ProductCard = ({ category }: { category: CategoryProps }) => {
  return (
    <Link
      href={"/somewhere"}
      className="w-full md:w-2/6 flex bg-gray-100 rounded-md items-center"
    >
      <div className="w-3/12 flex items-center">
        <Image
          width={156}
          height={156}
          src={category.Icon.data.attributes.formats.thumbnail.url}
          alt="popular Categores"
        />
      </div>
      <div className="flex flex-col p-3 h-fit ">
        <h1 className="font-semibold text-lg">{category.Title}</h1>
        <p className="text-gray-500 text-sm">{category.Description}</p>
      </div>
    </Link>
  );
};
