import { logo } from "@/public/images";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full sticky py-2 px-5 lg:py-5 lg:px-14">
      <div className="flex flex-wrap items-center justify-between py-2 gap-6 md:py-4 md:gap-0 relative">
        <input
          aria-hidden="true"
          type="checkbox"
          name="toggle_nav"
          id="toggle_nav"
          className="hidden peer"
        />
        <div className="z-20 flex justify-between md:px-0 lg:w-4/12">
          <a href="#home" aria-label="logo">
            <div aria-hidden="true" className="flex space-x-1">
              <div className="w-7/12 md:w-3/12 lg:w-7/12 2xl:w-5/12 ">
                <Image src={logo} alt="logo" />
              </div>
            </div>
          </a>
          <div className="relative flex items-center lg:hidden max-h-10">
            <label
              role="button"
              htmlFor="toggle_nav"
              aria-label="humburger"
              id="hamburger"
              className="relative  p-6 -mr-6"
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
        <div
          aria-hidden="true"
          className="fixed z-10 inset-0 h-screen w-screen  backdrop-blur-xl origin-bottom scale-y-0 transition duration-500 peer-checked:origin-top peer-checked:scale-y-100 lg:hidden"
        ></div>
        <div
          className="flex-col z-20 flex-wrap gap-6 p-8 rounded-3xl border border-gray-600/10 shadow-2xl shadow-gray-300 justify-end w-full invisible opacity-0 translate-y-1  absolute top-full left-0 transition-all duration-300 scale-95 origin-top 
                            lg:relative lg:scale-100 lg:peer-checked:translate-y-0 lg:translate-y-0 lg:flex lg:flex-row lg:items-center lg:gap-0 lg:p-0 lg:bg-transparent lg:w-7/12 lg:visible lg:opacity-100 lg:border-none
                            peer-checked:scale-100 peer-checked:opacity-100 peer-checked:visible lg:shadow-none bg-white dark:border-gray-100"
        >
          <div className="text-black lg:pr-4 lg:w-auto w-full lg:pt-0">
            <ul className="tracking-wide font-medium lg:text-sm flex-col flex lg:flex-row gap-6 lg:gap-0">
              <li>
                <Link
                  href="/"
                  className="block md:px-4 transition hover:text-primary"
                >
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/shop/"
                  className="block md:px-4 transition hover:text-primary"
                >
                  <span>Shop</span>
                </Link>
              </li>
              <li>
                <Link
                  href="#testimonials"
                  className="block md:px-4 transition hover:text-primary"
                >
                  <span>Testimonials</span>
                </Link>
              </li>
              <li>
                <a
                  href="#blog"
                  className="block md:px-4 transition hover:text-primary"
                >
                  <span>Blog</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="mt-12 lg:mt-0">
            <a
              href="#"
              className="relative flex h-9 w-full items-center justify-center px-4 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
            >
              <span className="relative text-sm font-semibold text-black">
                Get Started
              </span>
            </a>
          </div>
        </div>
        <div className="bg-red-400">This is Cart</div>
      </div>
    </nav>
  );
}
