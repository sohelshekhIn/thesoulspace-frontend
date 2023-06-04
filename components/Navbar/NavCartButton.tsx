"use client";

import { useStateContext } from "@/context/StateContext";

const NavCartButton = () => {
  const { totalQuantity } = useStateContext();
  return (
    <span className="absolute top-0 right-0 w-5 h-5 bg-red-500 flex rounded-full justify-center items-center">
      <p className="text-gray-100 text-sm">{totalQuantity}</p>
    </span>
  );
};
export default NavCartButton;
