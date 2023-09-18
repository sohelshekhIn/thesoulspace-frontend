import Image, { StaticImageData } from "next/image";
import TitleDivider from "../Global/Divider";
import {
  customer_jeet_singh,
  customer_mihir_kushwa,
  customer_rits_azad,
  default_user,
} from "@/public/images";

const TestimonialSection = () => {
  return (
    <div className="min-w-screen min-h-screen bg-white flex items-center justify-center py-5">
      <div className="w-full bg-white px-5 py-16 md:py-24 text-gray-800">
        <div className="w-full max-w-6xl mx-auto">
          <div className="text-center max-w-xl mx-auto">
            <h1 className="text-4xl font-bold mb-1 text-gray-800">
              what people are saying.
            </h1>
            {/* <h3 className="text-xl mb-5 font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h3> */}
            <TitleDivider />
          </div>
          <div className=" mt-10 mx-auto md:flex justify-center max-w-4xl flex-wrap">
            <TestimonialCard
              name="Rekha Patel"
              image={default_user}
              testimony="
                Got exactly what I wanted. Hand finishing on my iPhone case is amainzing. Absolutely love it.
              "
            />
            <TestimonialCard
              name="Jeet Singh"
              image={customer_jeet_singh}
              testimony="
            Amazing quality and service ❤️. 100% recommend to my friends 🔥.
            Specially the aesethetics ones!!!!
              "
            />
            <TestimonialCard
              name="Rits Azad"
              image={customer_rits_azad}
              testimony="
           Ordered a wall canvas painting and I must say, it's amazing. The hand work is completely worth it. I'm in love with it. Thank you so much for this."
            />
            <TestimonialCard
              name="Mihir Kushwah"
              image={customer_mihir_kushwa}
              testimony="
            I ordered a customised case for my Pixel 7 with my name on it. I must say, the detailing and design was sooo goood. I'm in love with it. ✨
           "
            />
            <TestimonialCard
              name="Rinki Suryavanshi"
              image={default_user}
              testimony="
            Asked 3 elegant designs for my iPhone 13, the fiting and finishing is just perfect ❤️❤️
           "
            />
            <TestimonialCard
              name="Ankit Dwivedi"
              image={default_user}
              testimony="
              Got myself a Krishna desk canvas painting. It's soo beautiful and charming 😍😍. An amazing upgrade for my desk. Definitely recommend it.
           "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;

const TestimonialCard = ({
  name,
  image,
  testimony,
}: {
  name: string;
  image: string | StaticImageData;
  testimony: string;
}) => {
  return (
    <div className="px-3 md:w-1/2">
      <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6 hover:scale-110 hover:shadow-md duration-150 transition-all">
        <div className="w-full flex mb-4 items-center">
          <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
            <Image width={100} height={100} src={image} alt="" />
          </div>
          <div className="flex-grow pl-3">
            <h6 className="font-bold text-sm uppercase text-gray-600">
              {name}
            </h6>
          </div>
        </div>
        <div className="w-full">
          <p className="text-sm leading-tight">
            <span className="text-3xl leading-none italic font-bold text-gray-800 mr-1">
              &quot;
            </span>
            <span className="font-medium text-gray-600">{testimony}</span>
            <span className="text-2xl leading-none italic font-bold text-gray-800 ml-1">
              &quot;
            </span>
          </p>
        </div>
      </div>
      {/* <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
        <div className="w-full flex mb-4 items-center">
          <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
            <Image width={100} height={100} src={image} alt="" />
          </div>
          <div className="flex-grow pl-3">
            <h6 className="font-bold text-sm uppercase text-gray-600">
              Stevie Tifft.
            </h6>
          </div>
        </div>
        <div className="w-full">
          <p className="text-sm leading-tight">
            <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">
              &quot;
            </span>
            {testimony}
            <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
              &quot;
            </span>
          </p>
        </div>
      </div> */}
    </div>
  );
};
