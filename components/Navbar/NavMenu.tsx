"use client";
import { useStateContext } from "@/context/StateContext";
import Link from "next/link";
import { ReactNode } from "react";

const NavMenu = () => {
  const { cartOpen, setCartOpen } = useStateContext();
  return (
    <>
      {/* Nav Menu */}
      <input
        aria-hidden="true"
        type="checkbox"
        name="toggle_nav"
        id="toggle_nav"
        checked={cartOpen}
        onChange={() => setCartOpen((prev: boolean) => !prev)}
        className="hidden peer/navMenu"
      />
      <div
        aria-hidden="true"
        onClick={() => setCartOpen(false)}
        className="fixed  z-10 inset-0 h-screen w-screen  backdrop-blur-xl origin-bottom scale-y-0 transition duration-500 peer-checked/navMenu:origin-top peer-checked/navMenu:scale-y-100 lg:hidden"
      ></div>
      {/* Nav Menu Dropdown */}
      <div
        className="flex-col z-20 gap-6 flex-wrap p-12 rounded-b-2xl border border-gray-600/10 shadow-2xl shadow-gray-300 justify-end w-full invisible opacity-0 translate-y-1  absolute top-full left-0 transition-all duration-300 scale-95 origin-top 
 lg:relative lg:scale-100 lg:peer-checked/navMenu:translate-y-0 lg:translate-y-0 lg:top-0 lg:flex lg:flex-row lg:items-center lg:gap-0 lg:p-0 lg:bg-transparent lg:w-full lg:visible lg:opacity-100 lg:border-none
                            peer-checked/navMenu:scale-100 peer-checked/navMenu:opacity-100 peer-checked/navMenu:visible lg:shadow-none bg-white"
      >
        <div className="text-black lg:w-auto w-full lg:pt-0">
          <ul className="tracking-wide font-medium lg:text-base flex-col flex lg:flex-row gap-1 lg:gap-0">
            <NavLinks href="/">home</NavLinks>
            <NavLinks href="/shop/">shop</NavLinks>
            <NavLinks href="/custom-design/">custom design</NavLinks>
            <NavLinks href="/about/">about</NavLinks>
            <NavLinks href="/contact/">contact</NavLinks>
          </ul>
        </div>
      </div>
    </>
  );
};

const NavLinks = ({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) => {
  const { setCartOpen } = useStateContext();
  return (
    <li>
      <Link
        href={href}
        onClick={() => setCartOpen(false)}
        className="block border-b-2 w-full border-transparent hover:border-gray-700 p-3 transition-all hover:scale-105 "
      >
        <span>{children}</span>
      </Link>
    </li>
  );
};

export { NavMenuHamburger, NavMenu };

const NavMenuHamburger = () => {
  // animate hamburger icon to close and open
  const { cartOpen } = useStateContext();
  return (
    <div className="z-30 w-1/2 md:w-3/12 lg:hidden">
      <div className="h-full flex justify-end items-center">
        <label
          role="button"
          htmlFor="toggle_nav"
          aria-label="humburger"
          id="hamburger"
          className="relative p-4"
        >
          <div
            aria-hidden="true"
            id="line"
            className={`m-auto h-0.5 w-5 rounded transform bg-gray-700 transition duration-300 ease-[cubic-bezier(.62,-0.52,.43,1.45)] ${
              cartOpen ? "rotate-45 translate-y-[250%]" : ""
            }`}
          ></div>
          <div
            aria-hidden="true"
            id="line2"
            className={`m-auto mt-2 h-0.5 w-5 rounded transform bg-gray-700 transition duration-300 ease-[cubic-bezier(.62,-0.52,.43,1.45)] ${
              cartOpen ? "-rotate-45 mt-0 translate-y-[-250%]" : ""
            }`}
          ></div>
        </label>
      </div>
    </div>
  );
};
