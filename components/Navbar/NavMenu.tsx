import Link from "next/link";

const NavMenu = () => {
  return (
    <>
      {/* Nav Menu */}
      <input
        aria-hidden="true"
        type="checkbox"
        name="toggle_nav"
        id="toggle_nav"
        className="hidden peer/navMenu"
      />
      <div
        aria-hidden="true"
        className="fixed z-10 inset-0 h-screen w-screen  backdrop-blur-xl origin-bottom scale-y-0 transition duration-500 peer-checked/navMenu:origin-top peer-checked/navMenu:scale-y-100 lg:hidden"
      ></div>
      {/* Nav Menu Dropdown */}
      <div
        className="flex-col z-20 gap-6 flex-wrap p-12 rounded-3xl border border-gray-600/10 shadow-2xl shadow-gray-300 justify-end w-full invisible opacity-0 translate-y-1  absolute top-full left-0 transition-all duration-300 scale-95 origin-top 
 lg:relative lg:scale-100 lg:peer-checked/navMenu:translate-y-0 lg:translate-y-0 lg:top-0 lg:flex lg:flex-row lg:items-center lg:gap-0 lg:p-0 lg:bg-transparent lg:w-full lg:visible lg:opacity-100 lg:border-none
                            peer-checked/navMenu:scale-100 peer-checked/navMenu:opacity-100 peer-checked/navMenu:visible lg:shadow-none bg-white"
      >
        <div className="text-black lg:w-auto w-full lg:pt-0">
          <ul className="tracking-wide font-medium lg:text-base flex-col flex lg:flex-row gap-1 lg:gap-0">
            <li>
              <Link
                href="/"
                className="block border-b-2 border-transparent hover:border-gray-700 p-3 transition-all hover:scale-105 "
              >
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link
                href="/shop/"
                className="block border-b-2 border-transparent hover:border-gray-700 p-3 transition-all hover:scale-105 "
              >
                <span>Shop</span>
              </Link>
            </li>
            <li>
              <Link
                href="/order-your-design/"
                className="block border-b-2 border-transparent hover:border-gray-700 p-3 transition-all hover:scale-105 "
              >
                <span>Order Your Design</span>
              </Link>
            </li>
            <li>
              <Link
                href="/about/"
                className="block border-b-2 border-transparent hover:border-gray-700 p-3 transition-all hover:scale-105 "
              >
                <span>About</span>
              </Link>
            </li>
            <li>
              <Link
                href="/contact/"
                className="block border-b-2 border-transparent hover:border-gray-700 p-3 transition-all hover:scale-105 "
              >
                <span>Contact</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavMenu;
