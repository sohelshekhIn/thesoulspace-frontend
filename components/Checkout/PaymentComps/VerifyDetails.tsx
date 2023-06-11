"use client";

import {
  getSavedCheckoutContactDetails,
  getShippingAddressDetails,
} from "@/utils/clientcalls";
import Link from "next/link";

const VerifyDetails = () => {
  const localContactDetails = getSavedCheckoutContactDetails();
  const localShippingDetails = getShippingAddressDetails();
  return (
    <div className="flex flex-col">
      <div className="flex gap-3">
        <h1 className="text-2xl font-semibold">Verify Details</h1>
        {/* edit button which takes to checkout */}
        <button className="text-gray-500">
          <Link href="/checkout">Edit</Link>
        </button>
      </div>
      {/* display in form of address */}
      <div className="mt-5 flex flex-col">
        <h1 className="text-lg font-semibold">
          {localContactDetails?.firstName} {localContactDetails?.lastName}
        </h1>
        <h1 className="text-lg font-medium mt-1">
          {localShippingDetails?.addressLine1}
        </h1>
        <p className="text-base">{localShippingDetails?.addressLine2}</p>
        <p className="text-base">Landmark: {localShippingDetails?.landmark}</p>
        <p className="text-base">
          {localShippingDetails?.city}, {localShippingDetails?.district}
        </p>
        <p className="text-base">
          {localShippingDetails?.state}, {localShippingDetails?.pincode}
        </p>
      </div>
    </div>
  );
};

export { VerifyDetails };
