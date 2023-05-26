import { footer_logo } from "@/public/icons";
import Image from "next/image";

const Footer = () => {
  return (
    <div>
      <footer className="bg-black text-white w-full p-8 rounded-t-xl">
        <div className="container">
          <div className="w-full p-3">
            <div className="w-[3rem]">
              <Image src={footer_logo} alt="Footer Logo" />
            </div>
          </div>
          <div className="flex flex-wrap mt-5">
            <div className="flex flex-col gap-3 w-1/2">
              <h4 className="font-semibold text-lg">get help</h4>
              <ul className="">
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">shipping</a>
                </li>
                <li>
                  <a href="#">returns</a>
                </li>
                <li>
                  <a href="#">order status</a>
                </li>
                <li>
                  <a href="#">payment options</a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-3 w-1/2">
              <h4 className="font-semibold text-lg">online shop</h4>
              <ul>
                <li>
                  <a href="#">canvas painting</a>
                </li>
                <li>
                  <a href="#">pen art</a>
                </li>
                <li>
                  <a href="#">phone covers</a>
                </li>
                <li>
                  <a href="#">watercolor painting</a>
                </li>
                <li>
                  <a href="#">order own design</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <div className="w-full py-2 bg-white text-black ">
        <p className="text-sm w-full text-center">
          Designed and Developed by Sohel Shekh
        </p>
      </div>
    </div>
  );
};

export default Footer;
