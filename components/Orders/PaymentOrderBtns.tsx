"use client";

import { useRouter } from "next/navigation";

const SuccessBtn = () => {
  const router = useRouter();
  const handleSuccess = async () => {
    router.replace("/orders/confirmed");
  };
  return (
    <button
      onClick={handleSuccess}
      className="bg-green-500 text-white px-5 py-3 rounded-md"
    >
      Success
    </button>
  );
};

const FailedBtn = () => {
  const router = useRouter();
  const handleFailed = async () => {
    router.replace("/orders/failed");
  };
  return (
    <button
      onClick={handleFailed}
      className="bg-red-500 text-white px-5 py-3 rounded-md"
    >
      Failed
    </button>
  );
};

export { SuccessBtn, FailedBtn };
