import { logo_bg } from "@/public/images";
import Image from "next/image";

const AboutSection = () => {
  return (
    <div className="my-14 mx-auto p-4 w-[90dvw] relative">
      <span className="flex flex-col gap-4 z-10 max-w-4xl mx-auto">
        <blockquote className="mt-6 text-center italic text-gray-800">
          <span className="opacity-40 text-5xl leading-none">&ldquo;</span>
          <h1 className="font-semibold text-2xl">
            Art is the bridge that connects imagination to reality, transforming
            dreams into tangible beauty.
          </h1>
          <span className="opacity-40 text-5xl leading-none">&rdquo;</span>
        </blockquote>

        <p className="text-center text-lg">
          Welcome to soulspace Art Gallery, where imagination meets artistry.
          Explore a captivating collection of personalized artworks that capture
          the essence of your unique vision. From customized portraits to
          bespoke creations, discover the power of art to inspire and transform.
          Unleash your creativity and let your story come alive. Welcome to a
          world of limitless possibilities.
        </p>
      </span>
      <Image
        src={logo_bg}
        className="absolute top-0 right-1/2 transform translate-x-1/2 z-0 opacity-5 sm:w-1/2 lg:w-1/3 max-w-[20rem]"
        alt="Background Logo"
      />
    </div>
  );
};

export default AboutSection;
