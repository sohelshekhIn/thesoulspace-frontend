"use client";

import { Formik, Field } from "formik";
import * as Yup from "yup";
import { showToast } from "../Global/Toast";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import LoadingSpinner from "../Global/LoadingSpinner";

const LoginForm = ({ csrfToken }: { csrfToken: string | undefined }) => {
  const searchParams = useSearchParams();
  const error = searchParams.get("error")!;

  useEffect(() => {
    // if callback url is present in query params, store it in session storage
    if (searchParams.get("callbackUrl")) {
      sessionStorage.setItem("callbackUrl", searchParams.get("callbackUrl")!);
    }
  }, []);

  useEffect(() => {
    if (error) {
      showToast(error, "error");
    }
  }, [error]);

  const getCallbackUrl = () => {
    "use client";
    if (searchParams.get("callbackUrl")) {
      return searchParams.get("callbackUrl")!;
    } else {
      if (sessionStorage.getItem("callbackUrl")) {
        return sessionStorage.getItem("callbackUrl")!;
      } else {
        return "/";
      }
    }
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={Yup.object({
        email: Yup.string()
          .required("Email is required")
          .email("Enter valid email"),
        password: Yup.string()
          .required("Password is required")
          .min(6, "Password must be at least 6 characters")
          .max(25, "Password must be at most 25 characters"),
      })}
      onSubmit={async (values, { setSubmitting }) => {
        if (csrfToken === null) {
          showToast(
            "Unable to find CSRF token. Please refresh the page and try again.",
            "error"
          );
          return;
        }
        const res = await signIn("credentials", {
          redirect: true,
          // get callback url from query params
          callbackUrl: getCallbackUrl(),
          email: values.email,
          password: values.password,
          csrfToken: csrfToken,
        });
        if (res?.error) {
          showToast(res?.error, "error");
          return;
        } else if (res?.ok) {
          // remove callback url from session storage
          sessionStorage.removeItem("callbackUrl");
          showToast("Login successful!", "success");
          return;
        }
      }}
    >
      {({ errors, touched, handleSubmit, isSubmitting }) => (
        <form onSubmit={handleSubmit} className="flex flex-col gap-2 lg:gap-5">
          <div className="mt-5">
            <Field
              className="w-full p-3 rounded-lg border border-gray-300"
              type="email"
              name="email"
              aria-label="Enter your email"
              placeholder="Enter your email"
            />
            <p className="text-red-500 text-sm ">
              {errors.email && touched.email && errors.email}
            </p>
          </div>
          <div className="">
            <Field
              className="w-full p-3 rounded-lg border border-gray-300"
              type="password"
              name="password"
              placeholder="Enter your password"
              aria-label="Enter your password"
            />
            <p className="text-red-500 text-sm">
              {errors.password && touched.password && errors.password}
            </p>
          </div>
          <button
            className="flex mt-2 h-14 w-full items-center justify-center rounded-lg px-4 py-5 sm:w-max lg:w-full transition-all bg-black hover:bg-gray-800 hover:text-white text-gray-100"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <div className="flex items-center gap-2">
                <LoadingSpinner color="white" />
                <p>Verifying...</p>
              </div>
            ) : (
              <p>Log In</p>
            )}
          </button>
        </form>
      )}
    </Formik>
  );
};

export default LoginForm;
