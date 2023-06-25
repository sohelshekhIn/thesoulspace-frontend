import { ProductCarouselComp } from "@/components/Global/CarouselComp";
import { CartInputComp } from "@/components/Shop/CartInputComp";
import { RichTextMarkdown } from "@/components/Global/RichTextMarkdown";
import { getStaticData } from "@/utils/global";
import Image from "next/image";
import { redirect } from "next/navigation";
import { AddToCartButton, BuyNowButton } from "@/components/Shop/ShopButtons";
import { star } from "@/public/icons";

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
      <div className="flex flex-col lg:flex-row mt-5 mb-40 mx-auto w-[90dvw] sm:p-5 lg:justify-center lg:px-14 gap-8">
        <div className="w-full lg:w-1/3">
          <ProductCarouselComp data={data}>
            {data.Product_Image.map((image: any) => (
              <div key={image.url} className="w-[400px] sm:w-[500px]">
                <Image
                  src={image.formats.medium.url}
                  width={800}
                  height={800}
                  alt="product image"
                />
              </div>
            ))}
          </ProductCarouselComp>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex gap-1">
            <div>
              <Image src={star} width={14} height={14} alt="Product Rating" />
            </div>
            <p className="text-sm">4/5</p>
          </div>
          <h1 className="text-4xl font-semibold">{data.Name}</h1>
          <p className="text-base">{data.Short_Description}</p>
          <div className="flex pr-10 mt-5 justify-between items-center">
            <h1 className="text-2xl font-semibold">₹ {data.Price}</h1>
            <CartInputComp />
          </div>
          <div className="flex items-center mt-5 gap-2 w-full">
            <AddToCartButton product={data} />
            <BuyNowButton product={data} />
          </div>
          <div className="my-5">
            Description
            <RichTextMarkdown>
              {data.Product_Description || ""}
            </RichTextMarkdown>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
export const dynamic = "force-dynamic";
