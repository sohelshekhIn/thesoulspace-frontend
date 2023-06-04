"use client";
import { ToastContainer, toast, Flip } from "react-toastify";

import "react-toastify/dist/ReactToastify.min.css";

const ToastMessageContainer = () => {
  return <ToastContainer transition={Flip} position="bottom-right" />;
};
const showToast = (message: string, type: string) => {
  const toastConfig: any = {
    success: { type: toast.TYPE.SUCCESS, autoClose: 3000 },
    error: { type: toast.TYPE.ERROR, autoClose: 5000 },
    info: { type: toast.TYPE.INFO, autoClose: 4000 },
    warning: { type: toast.TYPE.WARNING, autoClose: 3500 },
    normal: { type: toast.TYPE.DEFAULT, autoClose: 2500 },
  };
  toast(message, toastConfig[type]);
};
export { ToastMessageContainer, showToast };
