import Link from "next/link";

const VerifyDetails = ({
  savedCheckoutContactDetails,
  savedShippingAddressDetails,
}: {
  savedCheckoutContactDetails: any;
  savedShippingAddressDetails: any;
}) => {
  const localContactDetails = savedCheckoutContactDetails;
  const localShippingDetails = savedShippingAddressDetails;

  return (
    <div className="flex flex-col">
      <div className="flex gap-3">
        <h1 className="text-2xl font-semibold">Verify Details</h1>
        {/* edit button which takes to checkout */}
        <button className="text-gray-500 underline">
          <Link href="/checkout">Edit</Link>
        </button>
      </div>
      {/* display in form of address */}
      <div className="mt-5 flex flex-col">
        <h1 className="text-base font-semibold">
          {localContactDetails?.firstName} {localContactDetails?.lastName}
        </h1>
        <h1 className="text-base mt-1">{localShippingDetails?.addressLine1}</h1>
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
