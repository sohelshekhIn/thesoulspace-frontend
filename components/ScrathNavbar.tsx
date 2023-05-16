import { avatar, cart } from "@/public/icons";
import { logo } from "@/public/images";

import Image from "next/image";
import Link from "next/link";

export default function ScratchBar() {
  return (
    <nav className=" w-full sticky bg-white shadow-sm">
      <div className="flex py-3 px-4 md:px-10 lg:py-4 xl:py-5 xl:px-12 2xl:px-24">
        <div className="z-30 w-8/12 lg:w-4/12 flex items-center">
          <div className="w-8/12 sm:w-6/12 md:w-4/12 lg:w-8/12 xl:w-6/12 2xl:w-5/12">
            <Link href="/">
              <div className="flex flex-col">
                <Image src={logo} alt="logo" />
              </div>
            </Link>
          </div>
        </div>
        <div className="flex w-4/12 lg:w-8/12 justify-end lg:gap-5 lg:relative  lg:flex-row-reverse lg:justify-start">
          <input
            aria-hidden="true"
            type="checkbox"
            name="toggle_nav"
            id="toggle_nav"
            className="hidden peer"
          />
          <div className="z-30 transform -translate-x-3 lg:translate-x-0 flex relative justify-end items-center">
            <input
              aria-hidden="true"
              type="checkbox"
              name="toggle_menu"
              id="toggle_menu"
              className="hidden peer/menu"
            />
            <label
              htmlFor="toggle_menu"
              className="hover:scale-110 hover:bg-gray-100 transition-all rounded-full cursor-pointer"
            >
              <Image src={avatar} alt="User" />
            </label>
            <div className="z-20 invisible scale-95 opacity-0 absolute top-0 w-52 p-6 transition-all transform peer-checked/menu:translate-y-14 peer-checked/menu:visible peer-checked/menu:opacity-100 peer-checked/menu:scale-100 duration-300 rounded-lg shadow-xl backdrop-blur-xl border bg-white">
              <div className="">
                <p className="text-black font-semibold text-lg">Sohel Shekh</p>
                <ul className="flex flex-col mt-5">
                  <li className="p-3 rounded-md hover:bg-gray-100 hover:scale-110 font-medium w-full transition duration-300">
                    <Link href="/my-account/">My Account</Link>
                  </li>
                  <li className="p-3 rounded-md hover:bg-gray-100 hover:scale-110 font-medium w-full transition duration-300">
                    <Link href="/my-account/orders">My Orders</Link>
                  </li>
                  <li className="p-3 rounded-md hover:bg-gray-100 hover:scale-110 font-medium w-full transition duration-300">
                    <Link href="/logout">Logout</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="z-30 w-1/2 md:w-3/12 lg:w-1/12 flex justify-end items-center">
            <Link
              href="/cart"
              className="cursor-pointer transition-all relative p-1 min-w-[2em] max-w-[2.7em] hover:scale-105 hover:bg-gray-100 rounded-full"
            >
              <span className="hidden absolute top-0 right-0 w-5 h-5 bg-black rounded-full justify-center items-center">
                <p className="text-gray-100 text-sm">+1</p>
              </span>
              <Image src={cart} alt="Cart" />
            </Link>
          </div>
          <div
            aria-hidden="true"
            className="fixed z-10 inset-0 h-screen w-screen  backdrop-blur-xl origin-bottom scale-y-0 transition duration-500 peer-checked:origin-top peer-checked:scale-y-100 lg:hidden"
          ></div>
          <div
            className="flex-col z-20 gap-6 flex-wrap p-12 rounded-3xl border border-gray-600/10 shadow-2xl shadow-gray-300 justify-end w-full invisible opacity-0 translate-y-1  absolute top-full left-0 transition-all duration-300 scale-95 origin-top 
 lg:relative lg:scale-100 lg:peer-checked:translate-y-0 lg:translate-y-0 lg:top-0 lg:flex lg:flex-row lg:items-center lg:gap-0 lg:p-0 lg:bg-transparent lg:w-full lg:visible lg:opacity-100 lg:border-none
                            peer-checked:scale-100 peer-checked:opacity-100 peer-checked:visible lg:shadow-none bg-white"
          >
            <div className="text-black lg:pr-4 lg:w-auto w-full lg:pt-0">
              <ul className="tracking-wide font-medium lg:text-base flex-col flex lg:flex-row gap-1 lg:gap-0">
                <li>
                  <Link
                    href="/"
                    className="block p-3 transition-all hover:scale-105 hover:bg-gray-100"
                  >
                    <span>Home</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/shop/"
                    className="block p-3 transition-all hover:scale-105 hover:bg-gray-100"
                  >
                    <span>Shop</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/order-your-design/"
                    className="block p-3 transition-all hover:scale-105 hover:bg-gray-100"
                  >
                    <span>Order Your Design</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about/"
                    className="block p-3 transition-all hover:scale-105 hover:bg-gray-100"
                  >
                    <span>About</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact/"
                    className="block p-3 transition-all hover:scale-105 hover:bg-gray-100"
                  >
                    <span>Contact</span>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="mt-12 lg:mt-0 hidden">
              <Link
                href="/track-order/"
                className="flex h-10 w-full items-center justify-center rounded-full px-4 py-5 sm:w-max transition-all bg-black hover:scale-110 hover:text-white text-gray-100"
              >
                <span className="text-sm font-semibold ">Login</span>
              </Link>
            </div>
          </div>
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
}
