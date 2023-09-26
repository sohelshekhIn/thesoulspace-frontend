import {
  custom_design_banner,
  custom_shop_banner,
  custom_wallart,
} from "@/public/images";
import Image from "next/image";
import Link from "next/link";

export default function CustomDesignPage() {
  return (
    <div className="p-3 py-10 md:p-10 w-full">
      <div className="w-[90vw] max-w-4xl p-2 py-5 md:p-10 mx-auto bg-gray-100/70">
        <div className="">
          <h1 className="text-6xl md:text-9xl font-bold text-gray-800">
            Your Story,
          </h1>
          <h1 className="text-6xl md:text-9xl font-bold text-gray-800">
            Your Style:
          </h1>
          <h1 className="text-3xl mt-3 md:text-5xl font-bold text-gray-800">
            Custom Artwork &
          </h1>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
            Phone Cases
          </h1>
        </div>
        <p
          className="
            text-lg md:text-xl text-gray-600 mt-5
          "
        >
          We create custom artwork based on your story and style.
          <br /> We then start painting your artwork on a phone case for your
          phone.
        </p>
        <Link
          href="/custom-design/order-case"
          className="py-3 px-5 bg-gray-800 mt-7 text-white rounded-md"
        >
          Get yours now
        </Link>
      </div>
      <div className="w-[90vw] max-w-4xl p-2 py-5 md:p-10 mx-auto mt-10">
        <div className="w-full flex flex-col-reverse md:flex-row">
          <div className="w-full md:w-1/2">
            <h1 className="mt-5 md:mt-20 text-gray-800 text-5xl font-bold">
              Any Design
            </h1>
            <h1 className="text-gray-800 text-5xl font-bold">For any phone!</h1>
            <p className="mt-4 mb-8">
              Design a phone case that matches your mood, style, or interests.
              It&apos;s your canvas – start creating now!
            </p>
            <Link
              href="/custom-design/order-case"
              className="py-3 px-5 bg-gray-800 mt-7 text-white rounded-md"
            >
              Start Customizing Today
            </Link>
          </div>
          <div className="mt-10 md:mt-0">
            <Image src={custom_design_banner} alt="Custom Phone Case Banner" />
          </div>
        </div>
      </div>
      <div className="w-[90vw] max-w-4xl py-5 mx-auto mt-8">
        <div className="w-full flex flex-col md:flex-row gap-5">
          <div className="w-full md:w-2/3">
            <Image
              className="rounded-md mt-10 md:mt-0"
              src={custom_wallart}
              alt="Custom Wall Art Banner"
            />
          </div>
          <div className="p-2 w-full md:w-1/3">
            <h1 className="mt-0 md:mt-52 text-gray-800 text-5xl font-bold">
              Craft unique stories on your walls!
            </h1>
            <p className="mt-4 mb-8">
              Personalize your living space with our stunning custom wall art
              creations. Crafted with precision, each piece is a testament to
              your individuality.
            </p>
            <Link
              href="/custom-design/order-painting"
              className="py-3 px-5 bg-gray-800 mt-7 text-white rounded-md"
            >
              Design Your Dream Decor
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-gray-200 flex flex-col-reverse md:flex-row rounded-lg p-3 md:p-10 max-w-4xl mx-auto mt-10 mb-14">
        <div className="w-full md:w-1/2 p-5">
          <h1 className="text-3xl font-bold text-gray-800 mt-4 mb-8">
            Continue exploring other stuffs on our store
          </h1>
          {/* <button className="mt-5  px-5 py-3 text-white bg-gray-800 rounded-md"> */}
          <Link
            href="/shop"
            className="bg-gray-800 text-white py-3 px-5 rounded-md"
          >
            Explore Shop
          </Link>
          {/* </button> */}
        </div>
        <div className="w-full md:w-1/2">
          <Image
            className="rounded-md"
            src={custom_shop_banner}
            alt="Explore Shop Banner Image"
          />
        </div>
      </div>
    </div>
  );
}
