"use client";

import { confetti, paymentFailed } from "@/public/icons";
import Image from "next/image";
import Link from "next/link";
import { redirect, useSearchParams } from "next/navigation";

const OrderConfirmedPage = (context: any) => {
  const orderId = context.params.order[0];

  const searchParams = useSearchParams();
  const status = searchParams.get("payment_status");

  if (status === "Failed") {
    return <FailedComp orderId={orderId} />;
  } else if (status === "Credit") {
    return <SuccessComp orderId={orderId} />;
  } else {
    return redirect("/404");
  }
};

export default OrderConfirmedPage;

const FailedComp = ({ orderId }: { orderId: string }) => {
  const searchParams = useSearchParams();
  const payment_id = searchParams.get("payment_id");
  const payment_req_id = searchParams.get("payment_request_id");
  return (
    <div className="h-[70vh] w-full flex justify-center items-center">
      <div className="w-[90vw] rounded-lg max-w-xl  shadow-md p-14 flex flex-col items-center">
        <Image src={paymentFailed} alt="Order Failed" />
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
        <div className="my-3 text-gray-500 text-xs">
          <p>
            <span className="font-semibold">Order Id:</span> {`${orderId}`}
          </p>
          <p>
            <span className="font-semibold">Payment Id:</span>
            {`${payment_req_id}-${payment_id}`}
          </p>
        </div>
      </div>
    </div>
  );
};

const SuccessComp = ({ orderId }: { orderId: string }) => {
  return (
    <div className="h-[70vh] w-full flex justify-center items-center">
      <div className="w-[90vw] rounded-lg max-w-xl  shadow-md p-14 flex flex-col items-center">
        <Image src={confetti} alt="Order Confirmed" className=" max-w-xs p-8" />
        <h1 className="text-4xl font-semibold text-center">Order Confirmed</h1>
        <div className="my-3 text-gray-500 text-sm">
          <h1>
            <span className="font-semibold">Order Id:</span> {`${orderId}`}
          </h1>
        </div>
        <p className="text-gray-500 mt-2 text-center break-words">
          You will receive an acknowledgment email with order details soon!
        </p>
        {/* button "Explore more" */}
        <div className="w-full py-5 flex justify-center">
          <Link
            className="w-full lg:w-fit bg-gray-200 hover:bg-gray-300 transition-all text-black text-sm p-4 rounded-lg text-center"
            href={"/shop/"}
          >
            Explore More
          </Link>
        </div>
      </div>
    </div>
  );
};
