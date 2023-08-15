"use client";

import { useStateContext } from "@/context/StateContext";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import { showToast } from "../Global/Toast";

// NOTE: REMOVE UNUSED USE STATE in v1.2.1

export const CheckCartExists = () => {
  // const [reallyEmpty, setReallyEmpty] = useState<boolean>(false);
  let reallyEmpty: boolean = false;
  const { totalQuantity } = useStateContext();
  useEffect(() => {
    if (totalQuantity === 0 && !reallyEmpty) {
      // setReallyEmpty(true);
      reallyEmpty = true;
    }
    if (totalQuantity > 0 && reallyEmpty) {
      // setReallyEmpty(false);
      reallyEmpty = false;
    }
    // cart is empty
    if (reallyEmpty && totalQuantity === 0) {
      showToast("Cart is empty!", "error");
      redirect("/");
    }
  }, [totalQuantity]);
  return <div className="hidden"></div>;
};
