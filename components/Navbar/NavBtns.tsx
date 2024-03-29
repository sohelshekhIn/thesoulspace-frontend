"use client";

import { signOut } from "next-auth/react";
import Link from "next/link";

const NavSignInBtn = () => {
  // convert string to url object
  // const currentPath = new URL(window.location.href).pathname;
  return (
    <div className="z-30 flex items-center">
      <Link
        href={"/login"}
        className="flex h-10 w-full items-center justify-center rounded-md px-4 py-5 sm:w-max transition-all bg-black hover:bg-gray-800 hover:text-white text-gray-100"
      >
        <span className="text-sm font-semibold w-full">Login</span>
      </Link>
    </div>
  );
};

const NavSignOutBtn = ({ children }: { children: any }) => {
  return (
    <button className="w-full py-2" onClick={() => signOut()}>
      {children}
    </button>
  );
};

export { NavSignInBtn, NavSignOutBtn };
