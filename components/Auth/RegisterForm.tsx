"use client";

import { Formik, Field } from "formik";
import * as Yup from "yup";
import { showToast } from "../Toast";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import axios from "axios";
import { signIn } from "next-auth/react";

const RegisterForm = ({ csrfToken }: { csrfToken: any }) => {
  const searchParams = useSearchParams();
  const error = searchParams.get("error")!;
  useEffect(() => {
    if (error) {
      showToast(error, "error");
    }
  }, [error]);
  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      validationSchema={Yup.object({
        name: Yup.string()
          .required("Name is required")
          .min(3, "Name must be at least 3 characters")
          .max(25, "Name must be at most 25 characters"),
        email: Yup.string()
          .required("Email is required")
          .email("Enter valid email"),
        password: Yup.string()
          .required("Password is required")
          .min(6, "Password must be at least 6 characters")
          .max(25, "Password must be at most 25 characters"),
      })}
      onSubmit={async (values, { setSubmitting }) => {
        console.log(process.env.NEXTAUTH_URL);
        await axios
          .post(`${process.env.NEXT_PUBLIC_API_URL}/auth/local/register`, {
            name: values.name,
            username: values.email,
            email: values.email,
            password: values.password,
          })
          .then(async (res) => {
            showToast("Registration successful!", "success");
            const reSign = await signIn("credentials", {
              redirect: true,
              email: values.email,
              password: values.password,
              csrfToken: csrfToken,
            });
            if (reSign?.error) {
              showToast(reSign?.error, "error");
              return;
            } else if (reSign?.ok) {
              showToast("Login successful, Redirecting...", "success");
              return;
            }
          })
          .catch((err) => {
            if (
              err.response &&
              err.response.data.error.name === "ApplicationError" &&
              err.response.data.error.message ===
                "Email or Username are already taken"
            ) {
              showToast(
                "User already exists, please login or reset your password.",
                "error"
              );
            } else if (err.code === "ECONNREFUSED") {
              showToast(
                "Unable to connect to server. Please try again later.",
                "error"
              );
            } else {
              showToast("Failed to authenticate, please try again.", "error");
            }
          });
      }}
    >
      {({ errors, touched, handleSubmit, isSubmitting }) => (
        <form onSubmit={handleSubmit} className="flex flex-col gap-2 lg:gap-5">
          <div className="mt-5">
            <Field
              className="w-full p-3 rounded-lg border border-gray-300"
              type="text"
              name="name"
              aria-label="Enter your name"
              placeholder="Enter your name"
            />
            <p className="text-red-500 text-sm ">
              {errors.name && touched.name && errors.name}
            </p>
          </div>
          <div>
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
          <div>
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
            className="flex mt-2 h-14 w-full items-center justify-center rounded-lg px-4 py-5 sm:w-max lg:w-full transition-all bg-gray-900 hover:scale-105 hover:text-white text-gray-100"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Verifying..." : "Log In"}
          </button>
        </form>
      )}
    </Formik>
  );
};

export default RegisterForm;
