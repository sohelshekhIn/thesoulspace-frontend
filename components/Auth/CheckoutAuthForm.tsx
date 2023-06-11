import { Field, Formik } from "formik";
import * as Yup from "yup";
import { showToast } from "../Global/Toast";
import { signIn } from "next-auth/react";
import { useStateContext } from "@/context/StateContext";
import LoadingSpinner from "../Global/LoadingSpinner";

const CheckoutLogInForm = ({ csrfToken }: { csrfToken: string }) => {
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
        if (csrfToken === "") {
          showToast(
            "Unable to find CSRF token. Please refresh the page and try again.",
            "error"
          );
          return;
        }
        const res = await signIn("credentials", {
          email: values.email,
          password: values.password,
          csrfToken: csrfToken,
        });
        if (res?.error) {
          showToast(res?.error, "error");
          return;
        } else if (res?.ok) {
          showToast("Login successful!", "success");
          return;
        }
      }}
    >
      {({ handleSubmit, errors, touched, isSubmitting }) => (
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <div className="">
            <Field
              className="w-full p-2 rounded-lg border border-gray-300"
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
              className="w-full p-2 rounded-lg border border-gray-300"
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

const CheckoutRegisterForm = ({ csrfToken }: { csrfToken: string }) => {
  "use client";
  const { setCheckoutAuthType } = useStateContext();
  const registerUser = async (values: any) => {
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/local/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: values.name,
        username: values.email,
        email: values.email,
        password: values.password,
      }),
    })
      .then(async (response) => {
        if (response.ok) {
          showToast("Check your email for confirmation link!", "success");
          setCheckoutAuthType("login");
        } else {
          const errorData = await response.json();
          if (
            errorData.error.name === "ApplicationError" &&
            errorData.error.message === "Email or Username are already taken"
          ) {
            showToast(
              "User already exists, please login or reset your password.",
              "error"
            );
          } else {
            showToast("Failed to authenticate, please try again.", "error");
          }
        }
      })
      .catch((error) => {
        if (error.code === "ECONNREFUSED") {
          showToast(
            "Unable to connect to server. Please try again later.",
            "error"
          );
        } else {
          showToast("Failed to authenticate, please try again.", "error");
        }
      });
  };

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
        registerUser(values);
      }}
    >
      {({ handleSubmit, errors, touched, isSubmitting }) => (
        <form onSubmit={handleSubmit} className="flex flex-col gap-2 lg:gap-5">
          <div className="">
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
            className="flex mt-2 h-14 w-full items-center justify-center rounded-lg px-4 py-5 sm:w-max lg:w-full transition-all bg-black hover:bg-gray-800 hover:text-white text-gray-100"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <div className="flex items-center gap-2">
                <LoadingSpinner color="white" />
                <p>Registering...</p>
              </div>
            ) : (
              <p>Register</p>
            )}
          </button>
        </form>
      )}
    </Formik>
  );
};

export { CheckoutLogInForm, CheckoutRegisterForm };
