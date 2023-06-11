"use client";

import {
  getSavedCheckoutContactDetails,
  saveCheckoutContactDetails,
} from "@/utils/clientcalls";
import { Field, Formik } from "formik";
import { useRouter } from "next/navigation";
import * as Yup from "yup";
import LoadingSpinner from "../../Global/LoadingSpinner";

const ContactDetailForm = ({ session }: { session: any }) => {
  const router = useRouter();

  const sessionUserFirstName = session?.user?.name?.split(" ")[0] || "";
  const sessionUserLastName = session?.user?.name?.split(" ")[1] || "";
  const userEmail = session?.user?.email;

  const localContactDetails = getSavedCheckoutContactDetails();
  return (
    <Formik
      initialValues={{
        firstName: localContactDetails?.firstName || sessionUserFirstName,
        lastName: localContactDetails?.lastName || sessionUserLastName,
        email: userEmail,
        phone: localContactDetails?.phone || "",
      }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .required("First Name is required")
          .min(3, "First Name must be at least 3 characters")
          .max(25, "First Name must be at most 25 characters"),
        lastName: Yup.string()
          .required("Last Name is required")
          .min(3, "Last Name must be at least 3 characters")
          .max(25, "Last Name must be at most 25 characters"),
        email: Yup.string()
          .required("Email is required")
          .email("Enter valid email"),
        phone: Yup.number()
          .required("Phone is required")
          .min(1000000000, "Enter valid phone number")
          .max(9999999999, "Enter valid phone number"),
      })}
      onSubmit={(values) => {
        saveCheckoutContactDetails(
          values.firstName,
          values.lastName,
          session?.user?.email,
          values.phone
        );
        router.push("/checkout/address");
      }}
    >
      {({ handleSubmit, errors, touched, isSubmitting }) => (
        <div className="w-full">
          <div className="mb-4">
            <h1 className="text-2xl font-semibold">Contact Details</h1>
            <p className="text-sm text-gray-500">
              These details will be used for shipping
            </p>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <div className="flex gap-2">
              <div className="w-1/2">
                {/* label */}
                <label htmlFor="firstName">First Name</label>
                <Field
                  className="w-full p-3 rounded-lg border border-gray-300"
                  type="text"
                  name="firstName"
                  aria-label="Enter your first name"
                  placeholder="Enter your first name"
                />
                {/* error */}
                <p className="text-red-500 text-sm ">
                  {/* @ts-ignore */}
                  {errors.firstName && touched.firstName && errors.firstName}
                </p>
              </div>
              <div className="w-1/2">
                <label htmlFor="lastName">Last Name</label>
                <Field
                  className="w-full p-3 rounded-lg border border-gray-300"
                  type="text"
                  name="lastName"
                  aria-label="Enter your last name"
                  placeholder="Enter your last name"
                />
                <p className="text-red-500 text-sm ">
                  {/* @ts-ignore */}
                  {errors.lastName && touched.lastName && errors.lastName}
                </p>
              </div>
            </div>
            <div className="">
              {/* non ediatble field */}
              <label htmlFor="email">Email</label>
              <Field
                className="w-full p-3 rounded-lg border border-gray-300"
                type="email"
                name="email"
                aria-label="Enter your email"
                placeholder="Enter your email"
                disabled
              />
            </div>
            <div className="flex flex-col">
              {/* label */}
              <label htmlFor="phone">Phone (+91)</label>
              <Field
                className="w-full p-3 rounded-lg border border-gray-300"
                type="number"
                name="phone"
                aria-label="Enter your phone number"
                placeholder="Enter your phone number (+91 xxxxx xxxxx)"
              />
              <p className="text-red-500 text-sm ">
                {/* @ts-ignore */}
                {errors.phone && touched.phone && errors.phone}
              </p>
            </div>
            <div className="flex justify-end">
              {/* submit button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-yellow-500 text-white px-5 py-3 rounded-lg"
              >
                {/* display loading spinner and text when submitting */}
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <LoadingSpinner color="white" />
                    <p>Saving...</p>
                  </div>
                ) : (
                  <p>Proceed to Shipping Address</p>
                )}
              </button>
            </div>
          </form>
        </div>
      )}
    </Formik>
  );
};

export { ContactDetailForm };
