"use client";

import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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

const HeroBannerCarouselComp = ({ children }: { children: object }) => {
  return (
    <Carousel
      responsive={responsive}
      swipeable={true}
      showDots={false}
      ssr={true}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={5000}
      removeArrowOnDeviceType={["tablet", "mobile"]}
      // deviceType={this.props.deviceType}
      containerClass="h-[110%] pb-[15%] md:h-[105%] md:pb-[5%]"
      itemClass="h-full"
      sliderClass="h-full"
    >
      {children}
    </Carousel>
  );
};

const ProductCarouselComp = ({
  children,
  data,
}: {
  children: object;
  data: any;
}) => {
  return (
    <Carousel
      responsive={responsive}
      ssr={true}
      showDots={true}
      removeArrowOnDeviceType={["tablet", "mobile"]}
      containerClass="pb-[10%]"
      dotListClass="custom-dot-list-style transform -translate-y-[50%]  gap-2"
      customDot={<CustomDot data={data.Product_Image} />}
    >
      {children}
    </Carousel>
  );
};

const CustomDot = ({
  onClick,
  active,
  data,
  index = 0,
}: {
  onClick?: any;
  active?: boolean;
  data: any;
  index?: number;
}) => {
  let containerSize = 60;
  return (
    <button
      className={`${
        active ? "ring-2" : "ring-0"
      } ring-offset-2 ring-gray-400 w-[${containerSize}px] h-[${containerSize}px]`}
      onClick={() => onClick()}
    >
      <Image
        src={data[index].formats.small.url}
        width={containerSize}
        height={containerSize}
        alt="product image"
      />
    </button>
  );
};

export { HeroBannerCarouselComp, ProductCarouselComp };
