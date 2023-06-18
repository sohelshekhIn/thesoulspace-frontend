import { Tomorrow } from "next/font/google";
import Image from "next/image";
import TitleDivider from "../Global/Divider";

const TestimonialSection = () => {
  return (
    <div className="min-w-screen min-h-screen bg-white flex items-center justify-center py-5">
      <div className="w-full bg-white px-5 py-16 md:py-24 text-gray-800">
        <div className="w-full max-w-6xl mx-auto">
          <div className="text-center max-w-xl mx-auto">
            <h1 className="text-4xl font-bold mb-5 text-gray-800">
              what people are saying.
            </h1>
            {/* <h3 className="text-xl mb-5 font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h3> */}
            <TitleDivider />
          </div>
          <div className="-mx-3 md:flex items-start">
            <TestimonialCard
              name="Stevie Tifft"
              image="https://i.pravatar.cc/100?img=2"
              testimony="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sunt ratione dolor exercitationem minima quas itaque saepe quasi architecto vel! Accusantium, vero sint recusandae cum tempora nemo commodi soluta deleniti."
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
  image: string;
  testimony: string;
}) => {
  return (
    <div className="px-3 md:w-1/3">
      <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
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
            <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">
              "
            </span>
            {testimony}
            <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
              "
            </span>
          </p>
        </div>
      </div>
      <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
        <div className="w-full flex mb-4 items-center">
          <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
            <img width={100} height={100} src={image} alt="" />
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
              "
            </span>
            {testimony}
            <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
              "
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
