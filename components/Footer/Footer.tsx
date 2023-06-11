import { footer_logo, instagram } from "@/public/icons";
import { gpay, mastercard, paytm, rupay, upi, visa } from "@/public/images";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    // <div>
    //    <footer className="bg-gray-900 text-white w-full p-8 rounded-t-3xl">
    //     <div className="container lg:max-w-[90vdw] lg:px-36">
    //       <div className="w-full p-3">
    //         <div className="w-[3rem]">
    //           <Image src={footer_logo} alt="Footer Logo" />
    //         </div>
    //       </div>
    //       <div className="flex flex-wrap mt-5">
    //         <div className="flex flex-col gap-3 w-1/2">
    //           <h4 className="font-semibold text-lg">get help</h4>
    //           <ul className="">
    //             <li>
    //               <a href="#">FAQ</a>
    //             </li>
    //             <li>
    //               <a href="#">shipping</a>
    //             </li>
    //             <li>
    //               <a href="#">returns</a>
    //             </li>
    //             <li>
    //               <a href="#">order status</a>
    //             </li>
    //             <li>
    //               <a href="#">payment options</a>
    //             </li>
    //           </ul>
    //         </div>
    //         <div className="flex flex-col gap-3 w-1/2">
    //           <h4 className="font-semibold text-lg">online shop</h4>
    //           <ul>
    //             <li>
    //               <a href="#">canvas painting</a>
    //             </li>
    //             <li>
    //               <a href="#">pen art</a>
    //             </li>
    //             <li>
    //               <a href="#">phone covers</a>
    //             </li>
    //             <li>
    //               <a href="#">watercolor painting</a>
    //             </li>
    //             <li>
    //               <a href="#">order own design</a>
    //             </li>
    //           </ul>
    //         </div>
    //       </div>
    //     </div>
    //   </footer>
    //   <div className="w-full py-2 bg-white text-black ">
    //     <p className=" text-xs w-full text-center">
    //       Designed and Developed by Sohel Shekh
    //     </p>
    //   </div>
    //   <div className="bg-gray-900 h-1 w-full"></div>
    //   </div>

    <footer className="bg-gray-900 text-white w-full p-8 rounded-t-3xl">
      <div className="w-full flex flex-col gap-3">
        <div className="flex gap-1">
          <div className="w-[3.2rem]">
            <Image src={footer_logo} alt="Footer Logo" />
          </div>
          <div className="">
            <h1 className="text-2xl font-semibold px-2">the soul space</h1>
            <Link href="https://www.instagram.com/_soul_space_67/" passHref>
              {/* insta */}
              <div className="flex gap-1 items-center">
                <Image className="p-2" src={instagram} alt="Instagram" />
                <p>_soul_space_67</p>
              </div>
            </Link>
          </div>
        </div>
        <div className=" border-t-[1px] py-3">
          <h4 className="font-semibold text-lg mt-4">quick links</h4>
          <div className="flex gap-2 mt-3">
            <ul className="flex flex-col gap-1 w-1/2">
              <FooterLink href="/">home</FooterLink>
              <FooterLink href="/about">about</FooterLink>
              <FooterLink href="/shop">shop</FooterLink>
              <FooterLink href="/contact">contact</FooterLink>
            </ul>
            <ul className="flex flex-col gap-1 w-1/2">
              <FooterLink href="/order-status">order status</FooterLink>
              <FooterLink href="/shipping">shipping</FooterLink>
              <FooterLink href="/privacy-policy">privacy policy</FooterLink>
              <FooterLink href="/terms-and-conditions">
                terms and conditions
              </FooterLink>
            </ul>
          </div>
        </div>
        <div className="flex gap-3 mt-4 flex-wrap overflow-hidden">
          <div className=" aspect-video h-8">
            <Image className=" rounded-sm" src={visa} alt="Visa" />
          </div>
          <div className="aspect-video h-7">
            <Image className="rounded-sm" src={mastercard} alt="Mastercard" />{" "}
          </div>
          <div className="aspect-video h-10">
            <Image className="rounded-sm" src={rupay} alt="Rupay Card" />{" "}
          </div>
          <div className="aspect-video h-12">
            <Image className="rounded-sm" src={upi} alt="UPI" />{" "}
          </div>
          <div className="aspect-video h-10">
            <Image className="rounded-sm" src={gpay} alt="Google Pay" />{" "}
          </div>
          <div className="aspect-video h-10">
            <Image className="rounded-sm" src={paytm} alt="PayTm" />{" "}
          </div>
        </div>
        <div className="flex gap-2">
          <Link href="https://trustlock.co">
            <Image
              alt="Trust Badges"
              src="https://trustlock.co/wp-content/uploads/2019/01/guaranteed-safe-checkout-22.png"
              width="115"
              height="65"
            />
          </Link>
          <Link href="https://trustlock.co">
            <Image
              alt="Trust Badges"
              src="https://trustlock.co/wp-content/uploads/2019/01/ssl-secure-checkout-trust-seal.png"
              width="115"
              height="65"
            />
          </Link>
        </div>
        {/* copyright 2023 of soul space */}
        <div className="">
          <p className=" text-xs w-full text-center mt-4">
            © 2023 The Soul Space. All Rights Reserved.
          </p>
        </div>
      </div>
      <div className="">
        <p className=" text-xs w-full text-center mt-4">
          Developed by
          <span className="font-semibold"> Sohel Shekh</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

const FooterLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <li>
      <Link className="hover:underline active:underline" href={href}>
        {children}
      </Link>
    </li>
  );
};
