import { cart } from "@/public/icons";
import { logo } from "@/public/images";
import Image from "next/image";
import Link from "next/link";

import { getServerSession } from "next-auth/next";
import { authOptions } from "../../app/api/auth/[...nextauth]/route";
import { NavSignInBtn } from "./NavBtns";
import NavUserAccMenu from "./NavUserMenu";
import NavMenu from "./NavMenu";

const Navbar: any = async () => {
  const session = await getServerSession(authOptions);

  return (
    <nav className="w-full sticky top-0 bg-white shadow-sm z-50">
      <div className="flex py-3 px-4 md:px-10 lg:py-4 xl:py-5 xl:px-12 2xl:px-24 justify-between">
        {/* Logo Link */}
        <div className="z-30 w-7/12 lg:w-4/12 flex items-center">
          <div className="w-8/12 sm:w-6/12 md:w-4/12 lg:w-8/12 xl:w-6/12 2xl:w-5/12">
            <Link href="/">
              <div className="flex flex-col">
                <Image src={logo} alt="logo" priority />
              </div>
            </Link>
          </div>
        </div>
        {/* User Acc Menu */}
        <div className="flex w-4/12 sm:w-2/12 md:w-3/12 lg:w-8/12 justify-end lg:gap-5 lg:relative  lg:flex-row-reverse lg:justify-start">
          {session?.user ? (
            <NavUserAccMenu session={session} />
          ) : (
            <NavSignInBtn />
          )}
          {/* Cart  */}
          <div className="z-30 w-1/2 md:w-3/12 lg:w-1/12 flex justify-center items-center">
            <Link
              href="/cart"
              className="cursor-pointer transition-all relative p-1 min-w-[2.5em] max-w-[2.7em] hover:scale-105 hover:bg-gray-100 rounded-full"
            >
              <span className="hidden absolute top-0 right-0 w-5 h-5 bg-black rounded-full justify-center items-center">
                <p className="text-gray-100 text-sm">+1</p>
              </span>
              <Image src={cart} alt="Cart" />
            </Link>
          </div>
          <NavMenu />
          {/* Nav Hamburger Icon*/}
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
                  className="m-auto h-0.5 w-5 rounded bg-gray-700 transition duration-300"
                ></div>
                <div
                  aria-hidden="true"
                  id="line2"
                  className="m-auto mt-2 h-0.5 w-5 rounded bg-gray-700 transition duration-300"
                ></div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
