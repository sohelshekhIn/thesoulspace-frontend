"use client";

import { Field, Formik } from "formik";
import * as Yup from "yup";
import LoadingSpinner from "../../Global/LoadingSpinner";

import { setShippingAddressDetails } from "@/utils/checkoutDetailsCookies";
import { showToast } from "@/components/Global/Toast";
import { useRouter } from "next/navigation";
import { getCityDistrictState } from "@/utils/global";
import { useState } from "react";

const ShippingAddressForm = ({
  shippingAddressDetails,
  session,
}: {
  shippingAddressDetails: any;
  session: any;
}) => {
  const localShippingAddressDetails = shippingAddressDetails;
  const router = useRouter();
  const [pinCodeLoading, setPinCodeLoading] = useState<boolean>(false);

  return (
    <Formik
      initialValues={{
        addressLine1: localShippingAddressDetails?.addressLine1 || "",
        addressLine2: localShippingAddressDetails?.addressLine2 || "",
        landmark: localShippingAddressDetails?.landmark || "",
        city: localShippingAddressDetails?.city || "",
        district: localShippingAddressDetails?.district || "",
        state: localShippingAddressDetails?.state || "",
        pincode: localShippingAddressDetails?.pincode || "",
      }}
      validationSchema={Yup.object({
        addressLine1: Yup.string()
          .required("Address Line 1 is required")
          .min(3, "Address Line 1 must be at least 3 characters")
          .max(50, "Address Line 1 must be at most 50 characters"),
        addressLine2: Yup.string()
          .required("Address Line 2 is required")
          .min(3, "Address Line 2 must be at least 3 characters")
          .max(70, "Address Line 2 must be at most 70 characters"),
        landmark: Yup.string()
          .min(3, "Landmark must be at least 3 characters")
          .max(50, "Landmark must be at most 50 characters"),
        pincode: Yup.number()
          .required("Pincode is required")
          .min(100000, "Enter valid pincode")
          .max(999999, "Enter valid pincode"),
        city: Yup.string()
          .required("City is required")
          .min(3, "City must be at least 3 characters")
          .max(25, "City must be at most 25 characters"),
        district: Yup.string()
          .required("District is required")
          .min(3, "District must be at least 3 characters")
          .max(25, "District must be at most 25 characters"),
        state: Yup.string()
          .required("State is required")
          .min(3, "State must be at least 3 characters")
          .max(25, "State must be at most 25 characters"),
      })}
      onSubmit={(values) => {
        setShippingAddressDetails(
          session,
          values.addressLine1,
          values.addressLine2,
          values.landmark,
          values.city,
          values.district,
          values.state,
          values.pincode
        );
        router.push("/checkout/payment");
      }}
    >
      {({
        handleSubmit,
        errors,
        touched,
        isSubmitting,
        setFieldValue,
        values,
      }) => (
        <div className="">
          <div className="mb-4">
            <h1 className="text-2xl font-semibold">Shipping Address</h1>
            <p className="text-sm text-gray-500">
              These details will be used for shipping
            </p>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <div className="">
              {/* label */}
              <label htmlFor="addressLine1">Address Line 1</label>
              <Field
                className="w-full p-3 rounded-md border border-gray-300"
                type="text"
                name="addressLine1"
                aria-label="Enter your address line 1"
                placeholder="468 Avenue Height 3rd Floor"
              />
              {/* error */}
              <p className="text-red-500 text-sm ">
                {/* @ts-ignore */}
                {errors.addressLine1 &&
                  touched.addressLine1 &&
                  errors.addressLine1}
              </p>
            </div>
            <div className="">
              {/* label */}
              <label htmlFor="addressLine2">Address Line 2</label>
              <Field
                className="w-full p-3 rounded-md border border-gray-300"
                type="text"
                name="addressLine2"
                aria-label="Enter your address line 2"
                placeholder="Sector 10, Railway Station Road"
              />
              {/* error */}
              <p className="text-red-500 text-sm ">
                {/* @ts-ignore */}
                {errors.addressLine2 &&
                  touched.addressLine2 &&
                  errors.addressLine2}
              </p>
            </div>
            <div className="">
              {/* label */}
              <label htmlFor="landmark">Landmark</label>
              <Field
                className="w-full p-3 rounded-md border border-gray-300"
                type="text"
                name="landmark"
                aria-label="Enter nearest landmark"
                placeholder="Enter nearest landmark"
              />
              {/* error */}
              <p className="text-red-500 text-sm ">
                {/* @ts-ignore */}
                {errors.landmark && touched.landmark && errors.landmark}
              </p>
            </div>
            <div className="">
              <div className="flex gap-2">
                <div className="w-2/3">
                  {/* label */}
                  {/* pincode */}
                  <label htmlFor="pincode">Pincode</label>
                  <Field
                    className="w-full p-3 rounded-md border border-gray-300"
                    type="number"
                    name="pincode"
                    aria-label="Enter your pincode"
                    placeholder="Enter your pincode"
                  />
                </div>
                <div className="w-1/3 flex flex-col justify-end">
                  <button
                    type="button"
                    onClick={async () => {
                      setPinCodeLoading(true);
                      if (values.pincode.toString().length !== 6) {
                        showToast("Invalid Pincode", "error");
                        return;
                      }
                      const data = await getCityDistrictState(values.pincode);
                      setPinCodeLoading(false);
                      if (data.error) {
                        showToast(data.error, "error");
                        return;
                      }
                      setFieldValue("city", data.City);
                      setFieldValue("district", data.District);
                      setFieldValue("state", data.State);
                    }}
                    className="bg-gray-200 text-gray-900 px-5 py-3 rounded-md"
                  >
                    {pinCodeLoading ? (
                      <div className="flex items-center gap-2">
                        <LoadingSpinner color="black" />
                        <p>Getting Info...</p>
                      </div>
                    ) : (
                      <p>Get Info</p>
                    )}
                  </button>
                </div>
              </div>
              {/* error */}
              <p className="text-red-500 text-sm ">
                {/* @ts-ignore */}
                {errors.pincode && touched.pincode && errors.pincode}
              </p>
            </div>
            <div className="flex gap-2">
              <div className="w-1/2">
                {/* noneditable */}
                <label htmlFor="city">City</label>
                <Field
                  className="w-full p-3 rounded-md border border-gray-300"
                  type="text"
                  name="city"
                  aria-label="Get City from Pincode"
                  placeholder="Get City from Pincode"
                  disabled
                />
              </div>
              <div className="w-1/2">
                {/* noneditable */}
                <label htmlFor="district">District</label>
                <Field
                  className="w-full p-3 rounded-md border border-gray-300"
                  type="text"
                  name="district"
                  aria-label="Get District from Pincode"
                  placeholder="Get District from Pincode"
                  disabled
                />
              </div>
            </div>
            <div className="">
              {/* noneditable */}
              <label htmlFor="state">State</label>
              <Field
                className="w-full p-3 rounded-md border border-gray-300"
                type="text"
                name="state"
                aria-label="Get State from Pincode"
                placeholder="Get State from Pincode"
                disabled
              />
            </div>
            <div className="flex justify-end">
              <button
                disabled={isSubmitting}
                type="submit"
                className="bg-yellow-500 text-white px-5 py-3 rounded-md"
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <LoadingSpinner color="white" />
                    <p>Saving...</p>
                  </div>
                ) : (
                  <p>Continue to Payment</p>
                )}
              </button>
            </div>
          </form>
        </div>
      )}
    </Formik>
  );
};

export { ShippingAddressForm };
