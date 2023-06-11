"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const CheckoutSteps = () => {
  const path = usePathname();

  let stepProgess: string = "1/12";
  let step2 = "";
  let step3 = "";
  if (path === "/checkout/address") {
    stepProgess = "1/2";
    step2 = "text-yellow-500";
  } else if (path === "/checkout/payment") {
    stepProgess = "full";
    step2 = "text-yellow-500";
    step3 = "text-yellow-500";
  }
  return (
    <div className="my-5">
      <span className="hidden w-1/12"></span>
      <h2 className="sr-only">Steps</h2>
      <div>
        <ol className="mb-4 grid grid-cols-3 text-sm font-medium text-gray-500">
          <li className="flex items-center justify-start text-yellow-500 sm:gap-1.5">
            <Link href="/checkout">
              <span className="hidden sm:inline"> Details </span>

              <svg
                className="h-6 w-6 sm:h-5 sm:w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
                />
              </svg>
            </Link>
          </li>

          <li
            className={`flex items-center justify-center sm:gap-1.5 ${step2}`}
          >
            <Link href="/checkout/address">
              <span className="hidden sm:inline"> Address </span>

              <svg
                className="h-6 w-6 sm:h-5 sm:w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </Link>
          </li>

          <li className={`flex items-center justify-end sm:gap-1.5 ${step3}`}>
            <Link href="/checkout/payment">
              <span className="hidden sm:inline"> Payment </span>

              <svg
                className="h-6 w-6 sm:h-5 sm:w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                />
              </svg>
            </Link>
          </li>
        </ol>
        <div className="overflow-hidden rounded-full bg-gray-200">
          <div
            className={`h-2 w-${stepProgess} transition-all duration-200 ease-in-out rounded-full bg-yellow-500`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export { CheckoutSteps };
