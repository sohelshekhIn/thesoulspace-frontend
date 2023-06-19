"use client";

import { useStateContext } from "@/context/StateContext";
import { showToast } from "../Global/Toast";

const OfferComp = () => {
  const { offer, setOffer } = useStateContext();
  const checkOffer = async () => {
    const offerCode = (
      document.getElementById("offerCodeInput") as HTMLInputElement
    ).value;
    if (offerCode === "") {
      showToast("Please enter a offer code", "error");
      return;
    }

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/offer/check`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            offerCode,
          }),
        }
      );
      const data = await res.json();
      if (data.data == null && data.error.name === "BadRequestError") {
        showToast("Invalid offer code", "error");
        return;
      }
      setOffer({
        ...data.data,
      });
      showToast(`${data.data.offerName} offer applied`, "success");
      return;
    } catch (error) {
      showToast(`Something went wrong - ${error}`, "error");
      return;
    }
  };
  return (
    <div className="flex flex-col gap-4">
      <div className="">
        <h4 className="text-xl font-normal">Have a Offer Code?</h4>
        <p className="text-sm text-gray-500">
          Unlock exclusive discounts with a offer code.
        </p>
      </div>
      <div className="flex gap-3 text-sm">
        <input
          id="offerCodeInput"
          type="text"
          maxLength={15}
          placeholder="Enter Offer Code"
          className="w-full border uppercase border-gray-200 rounded-lg p-3"
        />
        <button
          onClick={() => checkOffer()}
          className="
              w-1/2 bg-gray-200 text-black text-sm
              px-4 py-2 rounded-lg"
        >
          Apply
        </button>
      </div>
      {offer && offer.valid ? (
        <div className="w-full bg-gray-100 p-3 flex justify-between rounded-md">
          <p>{offer.offerName}</p>
          <button
            onClick={() => setOffer(null)}
            className="text-sm text-gray-500"
          >
            Remove
          </button>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export { OfferComp };
