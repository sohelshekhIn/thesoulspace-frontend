"use client";

import Link from "next/link";
import demo from "@/public/images/demo.webp";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const HeroBanner = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="h-[80dvh] md:h-[65dvh] bg-gray-300 rounded-lg m-2 lg:max-w-[90dvw] mx-auto lg:mt-8">
      <Carousel
        responsive={responsive}
        swipeable={true}
        showDots={false}
        ssr={true}
        infinite={true}
        // autoPlay={true}
        autoPlaySpeed={5000}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        // deviceType={this.props.deviceType}
        containerClass="h-[110%] pb-[15%] md:h-[105%] md:pb-[5%]"
        itemClass="h-full"
        sliderClass="h-full"
      >
        <Banner />
        <Banner />
        <Banner />
      </Carousel>
    </div>
  );
};

export default HeroBanner;

const Banner = () => {
  return (
    <div className="flex flex-col justify-between h-full p-5">
      <div className="flex flex-col relative max-h-[70dvh] w-full md:max-w-[80dvw] lg:max-w-[70dvw] xl:max-w-[55dvw] mx-auto  select-none">
        <div className="flex flex-col w-full md:pt-14 3xl:pt-24">
          {/* md:pl-14 lg:pl-24 xl:pl-36 */}
          <h6 className="text-xl lg:text-2xl font-normal">Beats Solo Air</h6>
          <h3 className="text-5xl lg:text-6xl font-bold">Summer Sale</h3>
          <h1 className="text-9xl lg:text-[10rem] text-white font-extrabold">
            FINE
          </h1>
          <Link
            className="z-20 w-fit mt-5 rounded-lg px-5 py-3 bg-black text-white font-normal text-lg"
            href="/"
          >
            Shop Now
          </Link>
        </div>
        <div className="absolute top-[70%] sm:top-[30%] sm:w-3/4 sm:left-[20%] md:top-0 md:w-2/3 md:left-[35%] lg:left-[35%] lg:w-full xl:left-[45%] 2xl:-top-[10%] 3xl:top-0">
          <Image src={demo} alt="Demo" />
        </div>
      </div>
      <div className="select-none md:pr-14 lg:pr-24 xl:pr-36">
        <p className="text-right font-medium text-gray-800">Description</p>
        <p className="text-right text-sm text-gray-800">
          Best headphones in the market
        </p>
      </div>
    </div>
  );
};
