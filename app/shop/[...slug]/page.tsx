import { ProductCarouselComp } from "@/components/CarouselComp";
import { RichTextMarkdown } from "@/components/RichTextMarkdown";
import { minus, plus } from "@/public/icons";
import { getStaticData } from "@/utils/api";
import Image from "next/image";
import { redirect } from "next/navigation";

const ProductPage = async (context: any) => {
  const slug = context.params.slug[0];
  const slugParts = slug.split("-");
  const id = slugParts.pop();
  const slugName = slugParts.join("-");

  const data = await getStaticData(`/products/${id}?populate=deep,3`, 60);
  const dataDemo = {
    id: 2,
    attributes: {
      Name: "Pindola Art Canvas Painting",
      Price: 500,
      slug: "pindola-art-canvas-painting",
      Description:
        "Inspired from Pindola Art hailaing from the States of Madhya Pradhesh, this brings the local painting of pindola tribe from the moutians of Chitaspur",
      createdAt: "2023-05-28T05:31:28.321Z",
      updatedAt: "2023-05-29T18:35:26.510Z",
      publishedAt: "2023-05-28T05:31:30.792Z",
      sizes: ["500x500"],
      Short_Description: "Inspired from Pindola Art of Chittosgarh",
      Product_Description: null,
      Product_Image: {
        data: [
          {
            id: 11,
            attributes: {
              name: "Baba-Ind_0.jpg",
              alternativeText: null,
              caption: null,
              width: 1200,
              height: 975,
              formats: {
                thumbnail: {
                  name: "thumbnail_Baba-Ind_0.jpg",
                  hash: "thumbnail_Baba_Ind_0_41845917fd",
                  ext: ".jpg",
                  mime: "image/jpeg",
                  path: null,
                  width: 193,
                  height: 156,
                  size: 10.98,
                  url: "https://res.cloudinary.com/dlptbtozl/image/upload/v1685379559/thumbnail_Baba_Ind_0_41845917fd.jpg",
                  provider_metadata: {
                    public_id: "thumbnail_Baba_Ind_0_41845917fd",
                    resource_type: "image",
                  },
                },
                medium: {
                  name: "medium_Baba-Ind_0.jpg",
                  hash: "medium_Baba_Ind_0_41845917fd",
                  ext: ".jpg",
                  mime: "image/jpeg",
                  path: null,
                  width: 750,
                  height: 609,
                  size: 97.18,
                  url: "https://res.cloudinary.com/dlptbtozl/image/upload/v1685379560/medium_Baba_Ind_0_41845917fd.jpg",
                  provider_metadata: {
                    public_id: "medium_Baba_Ind_0_41845917fd",
                    resource_type: "image",
                  },
                },
                small: {
                  name: "small_Baba-Ind_0.jpg",
                  hash: "small_Baba_Ind_0_41845917fd",
                  ext: ".jpg",
                  mime: "image/jpeg",
                  path: null,
                  width: 500,
                  height: 406,
                  size: 52.61,
                  url: "https://res.cloudinary.com/dlptbtozl/image/upload/v1685379560/small_Baba_Ind_0_41845917fd.jpg",
                  provider_metadata: {
                    public_id: "small_Baba_Ind_0_41845917fd",
                    resource_type: "image",
                  },
                },
                large: {
                  name: "large_Baba-Ind_0.jpg",
                  hash: "large_Baba_Ind_0_41845917fd",
                  ext: ".jpg",
                  mime: "image/jpeg",
                  path: null,
                  width: 1000,
                  height: 813,
                  size: 150.4,
                  url: "https://res.cloudinary.com/dlptbtozl/image/upload/v1685379560/large_Baba_Ind_0_41845917fd.jpg",
                  provider_metadata: {
                    public_id: "large_Baba_Ind_0_41845917fd",
                    resource_type: "image",
                  },
                },
              },
              hash: "Baba_Ind_0_41845917fd",
              ext: ".jpg",
              mime: "image/jpeg",
              size: 198.5,
              url: "https://res.cloudinary.com/dlptbtozl/image/upload/v1685379560/Baba_Ind_0_41845917fd.jpg",
              previewUrl: null,
              provider: "cloudinary",
              provider_metadata: {
                public_id: "Baba_Ind_0_41845917fd",
                resource_type: "image",
              },
              createdAt: "2023-05-29T16:59:22.473Z",
              updatedAt: "2023-05-29T16:59:22.473Z",
            },
          },
          {
            id: 12,
            attributes: {
              name: "Rani-Kajal.jpg",
              alternativeText: null,
              caption: null,
              width: 1200,
              height: 958,
              formats: {
                thumbnail: {
                  name: "thumbnail_Rani-Kajal.jpg",
                  hash: "thumbnail_Rani_Kajal_4d98299668",
                  ext: ".jpg",
                  mime: "image/jpeg",
                  path: null,
                  width: 196,
                  height: 156,
                  size: 11.81,
                  url: "https://res.cloudinary.com/dlptbtozl/image/upload/v1685379559/thumbnail_Rani_Kajal_4d98299668.jpg",
                  provider_metadata: {
                    public_id: "thumbnail_Rani_Kajal_4d98299668",
                    resource_type: "image",
                  },
                },
                small: {
                  name: "small_Rani-Kajal.jpg",
                  hash: "small_Rani_Kajal_4d98299668",
                  ext: ".jpg",
                  mime: "image/jpeg",
                  path: null,
                  width: 500,
                  height: 399,
                  size: 54.11,
                  url: "https://res.cloudinary.com/dlptbtozl/image/upload/v1685379560/small_Rani_Kajal_4d98299668.jpg",
                  provider_metadata: {
                    public_id: "small_Rani_Kajal_4d98299668",
                    resource_type: "image",
                  },
                },
                large: {
                  name: "large_Rani-Kajal.jpg",
                  hash: "large_Rani_Kajal_4d98299668",
                  ext: ".jpg",
                  mime: "image/jpeg",
                  path: null,
                  width: 1000,
                  height: 798,
                  size: 159.63,
                  url: "https://res.cloudinary.com/dlptbtozl/image/upload/v1685379560/large_Rani_Kajal_4d98299668.jpg",
                  provider_metadata: {
                    public_id: "large_Rani_Kajal_4d98299668",
                    resource_type: "image",
                  },
                },
                medium: {
                  name: "medium_Rani-Kajal.jpg",
                  hash: "medium_Rani_Kajal_4d98299668",
                  ext: ".jpg",
                  mime: "image/jpeg",
                  path: null,
                  width: 750,
                  height: 599,
                  size: 102.41,
                  url: "https://res.cloudinary.com/dlptbtozl/image/upload/v1685379560/medium_Rani_Kajal_4d98299668.jpg",
                  provider_metadata: {
                    public_id: "medium_Rani_Kajal_4d98299668",
                    resource_type: "image",
                  },
                },
              },
              hash: "Rani_Kajal_4d98299668",
              ext: ".jpg",
              mime: "image/jpeg",
              size: 211.5,
              url: "https://res.cloudinary.com/dlptbtozl/image/upload/v1685379560/Rani_Kajal_4d98299668.jpg",
              previewUrl: null,
              provider: "cloudinary",
              provider_metadata: {
                public_id: "Rani_Kajal_4d98299668",
                resource_type: "image",
              },
              createdAt: "2023-05-29T16:59:22.579Z",
              updatedAt: "2023-05-29T16:59:22.579Z",
            },
          },
        ],
      },
    },
    meta: {},
  };
  if (!data) {
    return (
      <div>
        <h1>Product Not Found</h1>
      </div>
    );
  }
  if (data.attributes.slug !== slugName) {
    redirect(`/shop/${data.attributes.slug}-${data.id}`);
  }

  return (
    <div>
      <div className="flex flex-col mb-40 mx-auto w-[90dvw] gap-8">
        <div className="">
          <ProductCarouselComp data={data}>
            {data.attributes.Product_Image.data.map((image: any) => (
              <div className="">
                <Image
                  src={image.attributes.formats.medium.url}
                  width={400}
                  height={400}
                  alt="product image"
                />
              </div>
            ))}
          </ProductCarouselComp>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-semibold">{data.attributes.Name}</h1>
          <p className="text-base">{data.attributes.Short_Description}</p>
          <div className="flex pr-10 mt-5 justify-between items-center">
            <h1 className="text-2xl font-semibold">
              ₹ {data.attributes.Price}
            </h1>
            <div className="flex items-center noSelect">
              <button className="w-9 h-9 flex justify-center items-center rounded-full focus:outline-none bg-gray-200">
                <Image className="w-3 h-3" alt="minus" src={minus} />
              </button>
              <span className="px-3 text-lg">1</span>
              <button className="w-9 h-9 flex justify-center items-center rounded-full focus:outline-none bg-gray-200">
                <Image className="w-3 h-3" alt="plus" src={plus} />
              </button>
            </div>
          </div>
          <div className="my-10">
            <RichTextMarkdown
              markdownString={data.attributes.Product_Description}
            />
          </div>
        </div>
        <div className="flex items-center w-full fixed bottom-0 right-0">
          <button className="bg-gray-300 text-black w-1/2 px-5 py-4">
            Add to Cart
          </button>
          <button className="bg-black text-white w-1/2 px-5 py-4">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
