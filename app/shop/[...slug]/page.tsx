import { ProductCarouselComp } from "@/components/Global/CarouselComp";
import { CartInputComp } from "@/components/Shop/CartInputComp";
import { RichTextMarkdown } from "@/components/Global/RichTextMarkdown";
import { getStaticData } from "@/utils/global";
import Image from "next/image";
import { redirect } from "next/navigation";
import { AddToCartButton, BuyNowButton } from "@/components/Shop/ShopButtons";
import { star } from "@/public/icons";
import Link from "next/link";

const ProductPage = async (context: any) => {
  const slug = context.params.slug[0];
  const slugParts = slug.split("-");
  const id = slugParts.pop();
  const slugName = slugParts.join("-");

  const data = await getStaticData(`/products/${id}`, 60 * 3);

  if (!data) {
    return (
      <div>
        <h1>Product Not Found</h1>
      </div>
    );
  }
  if (data.slug !== slugName) {
    redirect(`/shop/${data.slug}-${data.id}`);
  }

  return (
    <div>
      <div className="flex flex-col mx-auto mt-5 mb-40 sm:p-5 lg:px-14">
        <Link href="/shop" className="pb-5 w-[80dvw] px-4 lg:mx-auto">
          <div className="flex items-center gap-2 cursor-pointer">
            {/* back svg */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-700"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                className="text-gray-700"
                d="M10.707 3.293a1 1 0 010 1.414L7.414 9H16a1 1 0 110 2H7.414l3.293 3.293a1 1 0 01-1.414 1.414l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>

            <p className="text-sm">Go to Shop</p>
          </div>
        </Link>

        <div className="flex flex-col mx-auto w-[90dvw] lg:flex-row lg:justify-center gap-2 lg:gap-8">
          {/* <div className="w-full lg:w-1/2 lg:px-10 2xl:px-24"> */}
          {/* <div className="w-full lg:w-1/2 lg:px-10 2xl:px-10"> */}
          <div className="w-full lg:w-1/3 lg:px-5 2xl:px-0">
            <ProductCarouselComp data={data}>
              {data.Product_Image.map((image: any) => (
                <Image
                  key={image.id}
                  src={image.formats.medium.url}
                  width={800}
                  height={800}
                  alt="Product Image"
                />
              ))}
            </ProductCarouselComp>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              {Object.keys(data.categories).map((category: any) => (
                <div
                  className="bg-gray-200/90 px-3 py-1 rounded-full"
                  key={data.categories[category].Name}
                >
                  <p className="text-xs font-medium text-gray-500">
                    {data.categories[category].Name}
                  </p>
                </div>
              ))}
            </div>
            <h1 className="text-3xl font-semibold">{data.Name}</h1>
            <p className="text-sm text-gray-600 max-w-2xl">
              {data.Short_Description}
            </p>
            <div className="flex gap-1 lg:mt-2">
              <div>
                <Image src={star} width={14} height={14} alt="Product Rating" />
              </div>
              <p className="text-sm">4/5</p>
            </div>
            <div className="flex pr-10 mt-5 justify-between lg:justify-normal lg:gap-24 items-center">
              <h1 className="text-2xl font-semibold">₹ {data.Price}</h1>
              <CartInputComp />
            </div>
            <div className="flex items-center mt-5 gap-2 w-full">
              <AddToCartButton product={data} />
              <BuyNowButton product={data} />
            </div>
            <div className="my-5">
              <p className="font-semibold text-gray-600">Description</p>
              <RichTextMarkdown>
                {data.Product_Description || ""}
              </RichTextMarkdown>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
export const dynamic = "force-dynamic";
