"use client";

import { useStateContext } from "@/context/StateContext";
import { redirect } from "next/navigation";

export const CheckCartExists = () => {
  const { totalQuantity } = useStateContext();
  if (totalQuantity === 0) {
    redirect("/shop");
  }
  return <div className="hidden"></div>;
};
