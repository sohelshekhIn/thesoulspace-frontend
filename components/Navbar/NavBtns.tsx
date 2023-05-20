"use client";

import { signIn, signOut } from "next-auth/react";
const NavSignInBtn = () => {
  return (
    <div className="z-30 flex items-center">
      <button
        onClick={() => signIn()}
        className="flex h-10 w-full items-center justify-center rounded-full px-4 py-5 sm:w-max transition-all bg-black hover:scale-110 hover:text-white text-gray-100"
      >
        <span className="text-sm font-semibold ">Login</span>
      </button>
    </div>
  );
};

const NavSignOutBtn = ({ children }: { children: any }) => {
  return <button onClick={() => signOut()}>{children}</button>;
};

export { NavSignInBtn, NavSignOutBtn };
