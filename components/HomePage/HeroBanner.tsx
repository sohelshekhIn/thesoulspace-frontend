import Link from "next/link";
import Image from "next/image";
import { HeroBannerCarouselComp } from "../Global/CarouselComp";
import { BannerDataType } from "@/types/GlobalTypes";

const HeroBanner = ({ bannerData }: { bannerData: any }) => {
  return (
    <div className="h-[80dvh] md:h-[65dvh] bg-gray-300 m-2 rounded-lg sm:max-w-[95dvw] sm:mx-auto lg:max-w-[90dvw] lg:mt-8">
      <HeroBannerCarouselComp autoPlay={true} autoPlaySpeed={10000}>
        {bannerData.map((banner: any) => (
          <Banner key={banner.id} data={banner} />
        ))}
      </HeroBannerCarouselComp>
    </div>
  );
};

export default HeroBanner;

const Banner = ({ data }: { data: BannerDataType }) => {
  return (
    <div className="flex flex-col justify-between h-full p-5">
      <div className="flex flex-col relative max-h-[70dvh] w-full md:max-w-[80dvw] lg:max-w-[70dvw] xl:max-w-[55dvw] mx-auto  select-none">
        <div className="flex flex-col w-full md:pt-14 3xl:pt-24">
          {/* md:pl-14 lg:pl-24 xl:pl-36 */}
          <h6 className="text-xl lg:text-2xl font-normal">{data.Short_Text}</h6>
          <h3 className="text-5xl lg:text-6xl font-bold">{data.Mid_Text}</h3>
          <h1 className="text-9xl lg:text-[10rem] text-white font-extrabold">
            {data.Big_Text}
          </h1>
          <Link
            href={data.CTA_Button.Button_Link}
            className="z-20 w-fit mt-5 px-5 py-3 bg-black text-white font-base text-lg hover:bg-gray-800  rounded-md"
          >
            {data.CTA_Button.Button_Text}
          </Link>
        </div>
        {/* check if image exists */}
        {!data.BannerImage.data ? null : (
          <div className="absolute top-[50%] sm:top-[30%] sm:w-3/4 sm:left-[20%] md:top-0 md:w-2/3 md:left-[35%] lg:left-[35%] lg:w-full xl:left-[45%] 2xl:-top-[10%] 3xl:top-0">
            <Image
              width={data.BannerImage.data.attributes.width}
              height={data.BannerImage.data.attributes.height}
              src={data.BannerImage.data.attributes.url}
              priority={true}
              alt="Hero Banner Image"
            />
          </div>
        )}
      </div>
      <div className="select-none md:pr-14 lg:pr-24 xl:pr-36">
        <p className="text-right font-medium text-gray-800">
          {data.Description_Title}
        </p>
        <p className="text-right text-sm text-gray-800">
          {data.Description_Text}
        </p>
      </div>
    </div>
  );
};
