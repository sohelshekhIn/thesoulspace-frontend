import { avatar, myAccount, logout, orders } from "@/public/icons";
import Image from "next/image";
import Link from "next/link";
import { NavSignOutBtn } from "./NavBtns";

const NavUserAccMenu = ({ session }: { session: any }) => {
  return (
    <div className="z-30 transform -translate-x-3 lg:translate-x-0 flex relative justify-end items-center">
      <input
        aria-hidden="true"
        type="checkbox"
        name="toggle_menu"
        id="toggle_menu"
        className="hidden peer/navUserMenu"
      />
      <label
        htmlFor="toggle_menu"
        className="hover:scale-110 hover:bg-gray-100 transition-all rounded-full cursor-pointer"
      >
        <Image src={session?.user.image || avatar} alt="User" />
      </label>
      {/* User Acc Menu Dropdown */}
      <div className="z-20 invisible scale-95 opacity-0 absolute top-0 w-80 p-6 transition-all transform peer-checked/navUserMenu:translate-y-14 peer-checked/navUserMenu:visible peer-checked/navUserMenu:opacity-100 peer-checked/navUserMenu:scale-100 duration-300 rounded-lg shadow-xl backdrop-blur-xl border bg-white -right-[25vw] lg:right-0">
        <div className="flex gap-5 pb-5 border-b-[1.5px] border-gray-300">
          <div className="flex items-center">
            <div className="max-w-[2rem]">
              <Image src={session?.user.image || avatar} alt="User" />
            </div>
          </div>
          <div className="flex flex-col">
            <p className="text-black font-semibold text-lg">
              {session?.user.name}
            </p>
            <p className="text-sm text-gray-500">{session?.user.email}</p>
          </div>
        </div>
        <ul className="flex flex-col mt-2">
          <li className="p-3 rounded-md hover:bg-gray-100 hover:scale-110 font-normal w-full transition duration-300">
            <Link href="/my-account/">
              <div className="flex gap-3">
                <span className="flex items-center max-w-[1.5em]">
                  <Image src={myAccount} alt="Manage Account" />
                </span>
                Manage Account
              </div>
            </Link>
          </li>
          <li className="p-3 rounded-md hover:bg-gray-100 hover:scale-110 font-normal w-full transition duration-300">
            <Link href="/my-account/orders">
              {" "}
              <div className="flex gap-3">
                <span className="flex items-center max-w-[1.5em]">
                  <Image src={orders} alt="My Orders" />
                </span>
                My Orders
              </div>
            </Link>
          </li>
          <li className="p-3 rounded-md hover:bg-gray-100 hover:scale-110 font-normal w-full transition duration-300">
            <NavSignOutBtn>
              <div className="flex gap-3">
                <span className="flex items-center max-w-[1.5em] p-[2px]">
                  <Image src={logout} alt="Log Out" />
                </span>
                Log Out
              </div>
            </NavSignOutBtn>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavUserAccMenu;
