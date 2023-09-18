"use client";

import { Field, Formik } from "formik";
import * as Yup from "yup";
import LoadingSpinner from "./LoadingSpinner";
import { showToast } from "@/components/Global/Toast";

export default function ContactForm() {
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        subject: "",
        message: "",
      }}
      validationSchema={Yup.object({
        name: Yup.string().required("Required"),
        email: Yup.string().email("Invalid email address").required("Required"),
        subject: Yup.string().required("Required"),
        message: Yup.string().required("Required"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          showToast(JSON.stringify(values), "success");
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ handleSubmit, isSubmitting, errors, touched }) => (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 max-w-2xl p-2 md:p-10"
        >
          <div className="flex flex-col md:flex-row gap-5 md:gap-2 w-full">
            <div className="flex flex-col">
              <label className="font-medium text-sm" htmlFor="name">
                Name
              </label>
              <Field
                className="p-2 border-b-2"
                type="text"
                name="name"
                id="name"
                placeholder="Name"
              />
              <p className="text-red-500 text-sm ">
                {/* @ts-ignore */}
                {errors.name && touched.name && errors.name}
              </p>
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-medium" htmlFor="email">
                Email
              </label>
              <Field
                className="border-b-2 p-2"
                type="email"
                name="email"
                id="email"
                placeholder="Email"
              />
              <p className="text-red-500 text-sm ">
                {/* @ts-ignore */}
                {errors.email && touched.email && errors.email}
              </p>
            </div>
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-medium" htmlFor="subject">
              Subject
            </label>
            <Field
              type="text"
              name="subject"
              id="subject"
              className="border-b-2 p-2"
              placeholder="Subject"
            />
            <p className="text-red-500 text-sm ">
              {/* @ts-ignore */}
              {errors.subject && touched.subject && errors.subject}
            </p>
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-medium" htmlFor="message">
              Message
            </label>

            <Field
              component="textarea"
              className="border-b-2 p-2"
              name="message"
              id="message"
              cols={10}
              rows={10}
              placeholder="Message"
            ></Field>
            <p className="text-red-500 text-sm ">
              {/* @ts-ignore */}
              {errors.message && touched.message && errors.message}
            </p>
          </div>
          <button
            disabled={isSubmitting}
            type="submit"
            className="bg-yellow-500 transition-all text-white px-5 py-3 rounded-md"
          >
            {isSubmitting ? (
              <div className="flex items-center gap-2 justify-center">
                <LoadingSpinner color="white" />
                <p>Sending...</p>
              </div>
            ) : (
              <p>Send Messsage</p>
            )}
          </button>
        </form>
      )}
    </Formik>
  );
}
