import Link from "next/link";

const RequestArtBanner = () => {
  return (
    <div className="m-2 mx-auto bg-gray-200/90 max-w-[90dvw] mt-14">
      <div className="p-8 py-16 flex flex-col gap-10 lg:p-14 lg:max-w-[70%] mx-auto">
        <h1 className="text-2xl font-semibold text-gray-800">
          Transform Your Vision into Art with our{" "}
          <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-yellow-400/50 relative inline-block">
            <span className="relative text-5xl text-gray-900 font-extrabold">
              Custom Artwork Request
            </span>
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
          className="bg-black text-white px-5 rounded-md py-4 w-fit hover:bg-gray-800 transition-all duration-200 "
        >
          Start Your Personalized Creation
        </Link>
      </div>
    </div>
  );
};

export default RequestArtBanner;
