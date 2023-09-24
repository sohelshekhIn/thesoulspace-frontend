"use client";

import { Field, Formik } from "formik";
import * as Yup from "yup";
import LoadingSpinner from "@/components/Global/LoadingSpinner";
import { showToast } from "@/components/Global/Toast";
import ReCAPTCHA from "react-google-recaptcha";
import { verifyCaptcha } from "@/utils/ServerActions";
import { useRef, useState, useMemo } from "react";
import { useDropzone } from "react-dropzone";

const baseStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "20px",
  borderWidth: 2,
  borderRadius: 2,
  borderColor: "#eeeeee",
  borderStyle: "dashed",
  backgroundColor: "#fafafa",
  color: "#bdbdbd",
  outline: "none",
  transition: "border .24s ease-in-out",
  cursor: "pointer",
};

const focusedStyle = {
  borderColor: "#2196f3",
};

const acceptStyle = {
  borderColor: "#00e676",
};

const rejectStyle = {
  borderColor: "#ff1744",
};

export default function CustomPaintingForm() {
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [isVerified, setIsverified] = useState<boolean>(false);

  // function to validate file size
  const maxFileSizeValidator = (file: any) => {
    // 10 mb
    const maxSize = 10 * 1024 * 1024;
    if (file.size > maxSize) {
      return {
        code: "file-too-large",
        message: "File is too large (max 10 MB)",
      };
    }
    return null;
  };

  const {
    fileRejections,
    acceptedFiles,
    getRootProps,
    getInputProps,
    isFocused,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    accept: {
      "image/*": [".png, .jpg, .jpeg, .pdf"],
      "application/pdf": [".pdf"],
    },
    maxFiles: 10,
    validator: maxFileSizeValidator,
  });

  // function to convert bytes into mb
  function bytesToSize(bytes: number) {
    const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
    if (bytes === 0) return "0 Byte";
    const i = Math.floor(Math.log(bytes) / Math.log(1024));
    return Math.round(bytes / Math.pow(1024, i)) + " " + sizes[i];
  }

  const files = acceptedFiles.map((file: any) => {
    return (
      <li key={file.path}>
        {file.path} - {bytesToSize(file.size)}
      </li>
    );
  });

  const fileRejectionItems = fileRejections.map(
    ({ file, errors }: { file: any; errors: any }) => {
      console.log(errors);

      return (
        <li key={file.path}>
          {file.path} - {bytesToSize(file.size)}
          {errors.map((e: any) => (
            <p className="text-red-500 " key={e.code}>
              {e.message}
            </p>
          ))}
        </li>
      );
    }
  );

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isFocused ? focusedStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isFocused, isDragAccept, isDragReject]
  );

  async function handleCaptchaSubmission(token: string | null) {
    // Server function to verify captcha
    await verifyCaptcha(token)
      .then(() => setIsverified(true))
      .catch(() => setIsverified(false));
  }
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        phone: "",
        paintingType: "",
        ideaText: "",
      }}
      validationSchema={Yup.object({
        name: Yup.string().required("Required"),
        email: Yup.string().email("Invalid email address").required("Required"),
        phone: Yup.string().required("Required").length(10),
        paintingType: Yup.string().required("Required").min(3),
        ideaText: Yup.string().required("Required").min(25).max(500),
      })}
      onSubmit={(values, { setSubmitting }) => {
        if (!isVerified) {
          showToast("Please verify captcha", "error");
          return;
        }
        setTimeout(() => {
          showToast(
            "Your response has been submitted, we'll reach back to you soon.",
            "success"
          );
          setSubmitting(false);
        }, 500);
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
                Phone
              </label>
              <Field
                className="border-b-2 p-2"
                type="number"
                name="phone"
                id="phone"
                placeholder="Phone"
              />
              <p className="text-red-500 text-sm ">
                {/* @ts-ignore */}
                {errors.phone && touched.phone && errors.phone}
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-5 md:gap-2 w-full">
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
            <div className="flex flex-col">
              <label className="text-sm font-medium" htmlFor="email">
                Painting Type
              </label>
              <Field
                className="border-b-2 p-2"
                type="paintingType"
                name="paintingType"
                id="email"
                placeholder="Type of Painting you want"
              />
              <p className="text-red-500 text-sm ">
                {/* @ts-ignore */}
                {errors.paintingType &&
                  touched.paintingType &&
                  errors.paintingType}
              </p>
            </div>
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-medium" htmlFor="ideas">
              Ideas
              <p className="text-sm font-medium">
                Upload your ideas, designs, images that you would like to
                suggest!
              </p>
            </label>
            <div {...getRootProps({ style })}>
              <input {...getInputProps()} />
              <p className="text-center">
                Drag 'n' drop some files here, or click to select files
                <br />
                Only images/pdf (max 10 files & 10 MB)
              </p>
            </div>

            {files.length > 0 && (
              <aside className="mt-4">
                <h6 className="font-medium">Selected Files</h6>
                <ul className="text-sm ml-2">{files}</ul>
              </aside>
            )}
            {fileRejectionItems.length > 0 && (
              <aside className="mt-4">
                <h6 className="font-medium">Rejected Files</h6>
                <ul className="text-sm ml-2">{fileRejectionItems}</ul>
              </aside>
            )}
          </div>
          <div className="flex flex-col mt-2">
            <label className="text-sm font-medium" htmlFor="message">
              Describe Your Idea
            </label>
            <Field
              component="textarea"
              className="border-b-2 p-2"
              name="ideaText"
              id="ideaText"
              cols={1}
              rows={3}
              placeholder="Idea Description"
            />
            <p className="text-red-500 text-sm ">
              {/* @ts-ignore */}
              {errors.ideaText && touched.ideaText && errors.ideaText}
            </p>
          </div>
          <ReCAPTCHA
            sitekey="6LdLxjMoAAAAAKzNCf27CtzvXKRkC-NfiSCuGcE1"
            ref={recaptchaRef}
            onChange={handleCaptchaSubmission}
          />
          <button
            disabled={isSubmitting || !isVerified}
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
