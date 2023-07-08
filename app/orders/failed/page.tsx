import { paymentFailed } from "@/public/icons";
import Image from "next/image";
import Link from "next/link";

const OrderFailedPage = () => {
  return (
    <div className="h-[70vh] w-full flex justify-center items-center">
      <div className="w-[90vw] rounded-lg max-w-xl  shadow-md p-14 flex flex-col items-center">
        <Image src={paymentFailed} alt="Order Confirmed" className="" />
        <h1 className="text-4xl mt-4 font-semibold text-center">
          Payment Failed 😔
        </h1>
        <p className="text-gray-500 mt-2 text-center break-words">
          Payment was either cancelled or failed. Please try again.
        </p>
        {/* button "Explore more" */}
        <div className="w-full py-5 flex justify-center">
          <Link
            className="w-full lg:w-fit bg-gray-200 hover:bg-gray-300 transition-all text-black text-sm p-4 rounded-lg text-center"
            href={"/cart/"}
          >
            Try Again
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderFailedPage;
