import Link from "next/link";

const RequestArtBanner = () => {
  return (
    <div className="m-2 mx-auto bg-gray-400/90 max-w-[90dvw] rounded-xl mt-14">
      <div className="p-8 flex flex-col gap-4 lg:p-14 lg:max-w-[70%] mx-auto">
        <h1 className="text-6xl font-normal">
          Transform Your Vision into Art with our{" "}
          <span className="text-yellow-400 font-semibold">
            Custom Artwork Requests
          </span>
        </h1>
        <p className="text-lg">
          Unleash your imagination with custom art requests. Let your creativity
          take center stage as we bring your unique ideas to life. Collaborate
          with{" "}
          <span className="font-semibold whitespace-nowrap">soul space</span> to
          create a bespoke masterpiece that reflects your vision and
          individuality.
        </p>
        <Link
          href="/request-artwork"
          className="bg-black text-white px-5 py-4 rounded-lg w-fit hover:bg-gray-800 hover:scale-105 transition-all duration-200 "
        >
          Start Your Personalized Creation
        </Link>
      </div>
    </div>
  );
};

export default RequestArtBanner;
