import {
  customerCentric,
  freeShipping,
  happyCustomer,
  qualitySeal,
} from "@/public/icons";
import { AboutUsMainImage } from "@/public/images";

import Image from "next/image";
import Link from "next/link";

const AboutUsPage = () => {
  return (
    <div className="w-[90vw] max-w-6xl mx-auto p-2 md:p-10">
      <div className="">
        <h1 className="text-5xl font-bold">About Us</h1>
        <p className="text-gray-800/80 font-normal text-lg mt-8">
          Welcome to The SoulSpace, where creativity knows no bounds. We&apos;re
          not just an eCommerce platform; we&apos;re your personal gateway to
          unique, handcrafted artistry.
        </p>
      </div>
      <div className="flex flex-col md:flex-row mt-16">
        <div className="w-full md:w-1/3">
          <Image src={AboutUsMainImage} alt="About thesoulspace" />
        </div>
        <div className="w-full md:w-2/3 py-4 md:p-16">
          <h1 className="text-3xl font-semibold">Our Story</h1>
          <p className="font-normal mt-5">
            The SoulSpace was born out of a single woman&apos;s passion for art
            and design. What began as a small, local custom phone case design
            studio is now a budding with aspirations to flourish into a thriving
            for one-of-a-kind artwork. Our journey started with a few brushes,
            paints, and a dream – a dream to turn every phone case into a
            canvas, every design into a masterpiece, and every customer into an
            art connoisseur. We&apos;re on a mission to transition our beloved
            local brand into a prominent online presence, connecting with art
            enthusiasts worldwide.
          </p>
        </div>
      </div>
      <div className="py-4 md:p-16">
        <h1 className="text-3xl font-semibold">Meaning Behind the Name:</h1>
        <p className="font-normal mt-5">
          &quot;the soulspace&quot; isn&apos;t just a name; it&apos;s a
          reflection of my core philosophy. Each piece of artwork I create is a
          piece of my soul. It&apos;s an expression of my passion, creativity,
          and love for the arts. I believe that art has the power to touch the
          soul, stir emotions, and transform ordinary objects into extraordinary
          treasures. In this space, I pour my heart and soul into every stroke
          of the brush, every pixel on the screen, and every piece I curate.
          It&apos;s not just about art; it&apos;s about creating a space where
          souls connect through art.
        </p>
      </div>
      <div className="flex flex-col md:flex-row mt-16 gap-16">
        <div className="w-full md:w-2/3 mt-14">
          <h1 className="text-3xl font-semibold">Our Color Theme:</h1>
          <p className="font-normal mt-5">
            Our chosen color theme, a harmonious blend of black and goldish
            yellow, represents the essence of The SoulSpace. Black symbolizes
            sophistication, elegance, and the depth of artistic expression.
            It&apos;s the canvas on which I create magic. Goldish yellow, on the
            other hand, embodies the radiance, creativity, and optimism that art
            brings to our lives. Together, these colors signify the fusion of
            timeless artistry with a touch of modernity and innovation.
          </p>
        </div>
        <div className="w-full md:w-1/3">
          <div className="w-full flex">
            <div className="w-1/2 h-96 bg-primary group">
              <div className="flex h-full justify-center items-center cursor-none">
                <div className="text-center text-white scale-100 md:scale-0  md:transition-transform md:ease-out md:duration-200 md:group-hover:scale-100">
                  #ead83a
                </div>
              </div>
            </div>
            <div className="w-1/2 h-96 bg-gray-800 group">
              <div className="flex h-full justify-center items-center cursor-none">
                <div className="text-center text-white scale-100 md:scale-0  md:transition-transform md:ease-out md:duration-200 md:group-hover:scale-100">
                  #1f2937
                </div>
              </div>
            </div>
            <div className="w-1/2 h-96 bg-gray-200 group">
              <div className="flex h-full justify-center items-center cursor-none">
                <div className="text-center text-white scale-100 md:scale-0  md:transition-transform md:ease-out md:duration-200 md:group-hover:scale-100">
                  #e5e7eb
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-16">
        {/* hover features card */}
        <div className="flex flex-col justify-center items-center bg-gray-100 rounded-lg p-4">
          <div className="w-24 h-24 rounded-full bg-gray-200 flex justify-center items-center p-4">
            <Image src={freeShipping} alt="Free Shipping" />
          </div>
          <h1 className="text-xl font-semibold mt-4">Free Shipping</h1>
          <p className="text-gray-800/80 text-center mt-2">
            Free shipping on all orders over Rs. 1499
          </p>
        </div>
        <div className="flex flex-col justify-center items-center bg-gray-100 rounded-lg p-4">
          <div className="w-24 h-24 rounded-full bg-gray-200 flex justify-center items-center p-6">
            <Image src={qualitySeal} alt="Top level Quality" />
          </div>
          <h1 className="text-xl font-semibold mt-4">Quality</h1>
          <p className="text-gray-800/80 text-center mt-2">
            We use high quality paints and materials for our paintings
          </p>
        </div>
        <div className="flex flex-col justify-center items-center bg-gray-100 rounded-lg p-4">
          <div className="w-24 h-24 rounded-full bg-gray-200 flex justify-center items-center p-6">
            <Image src={customerCentric} alt="Customer Centric" />
          </div>
          <h1 className="text-xl font-semibold mt-4">
            Customer-Centric Approach
          </h1>
          <p className="text-gray-800/80 text-center mt-2">
            We&apos;re dedicated to providing exceptional service and products
            that exceed your expectations.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center bg-gray-100 rounded-lg p-4">
          <div className="w-24 h-24 rounded-full bg-gray-200 flex justify-center items-center p-6">
            <Image src={happyCustomer} alt="Happy Customers" />
          </div>
          <h1 className="text-xl font-semibold mt-4">Happy Customers</h1>
          <p className="text-gray-800/80 text-center mt-2">
            Your satisfaction is our priority. We&apos;re proud to have positive
            reviews from our customers.
          </p>
        </div>
      </div>
      <div className="py-4 md:p-16">
        <h1 className="text-3xl font-semibold">Contact Me:</h1>
        <p className="font-normal mt-5">
          Have questions, ideas, or just want to say hello? I&apos;d love to
          hear from you. Reach out to me at{" "}
          <a
            className="text-blue-500 hover:bg-blue-500 hover:text-white transition-colors duration-200 ease-in-out"
            href="mailto:hi@thesoulspace.in"
            target="_blank"
          >
            hi@thesoulspace.in
          </a>{" "}
          or shoot message through{" "}
          <Link
            href="/contact"
            className="text-blue-500 hover:bg-blue-500 hover:text-white transition-colors duration-200 ease-in-out"
          >
            contact form
          </Link>
          . Let&apos;s paint the world with creativity, one artwork at a time.
        </p>
        <p className="mt-3">
          Thank you for being a part of The SoulSpace journey. Together,
          we&apos;ll create, inspire, and transform lives through art. Welcome
          to my vibrant and soulful world!
        </p>
      </div>
    </div>
  );
};

export default AboutUsPage;
