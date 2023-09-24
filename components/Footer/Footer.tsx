import { footer_logo, instagram } from "@/public/icons";
import { gpay, mastercard, paytm, rupay, upi, visa } from "@/public/images";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white w-full p-8 rounded-t-3xl">
      <div className="w-full flex flex-col gap-3">
        <div className="flex flex-col lg:flex-row w-full gap-10">
          <div className="flex gap-1 lg:w-1/4 lg:p-8">
            <div className="w-[3.2rem] lg:w-[14rem]">
              <Image src={footer_logo} alt="Footer Logo" />
            </div>
            <div className="">
              <h1 className="text-2xl font-semibold px-2">the soul space</h1>
              <Link
                target="_blank"
                href="https://www.instagram.com/_soul_space_67/"
                passHref
              >
                {/* insta */}
                <div className="flex gap-1 items-center">
                  <Image className="p-2" src={instagram} alt="Instagram" />
                  <p>_soul_space_67</p>
                </div>
              </Link>
              <p className="hidden lg:block text-sm mt-4 text-gray-400">
                {/* some good words regarding the soul space */}
                Discover captivating art pieces, express your individuality with
                custom covers, and immerse yourself in a world of artistic
                inspiration.
              </p>
            </div>
          </div>
          <div className="border-l-0 border-t-[1px] lg:border-t-0 lg:border-l-2 py-3 lg:px-10 lg:w-2/4">
            <h4 className="font-semibold text-lg mt-4">quick links</h4>
            <div className="flex gap-2 mt-3">
              <ul className="flex flex-col gap-1 w-1/2">
                <FooterLink href="/">home</FooterLink>
                <FooterLink href="/about">about</FooterLink>
                <FooterLink href="/shop">shop</FooterLink>
                <FooterLink href="/contact">contact</FooterLink>
              </ul>

              <ul className="flex flex-col gap-1 w-1/2">
                <FooterLink href="/account/my-orders">my orders</FooterLink>
                <FooterLink href="/more/shipping-policy">
                  shipping policy
                </FooterLink>
                <FooterLink href="/more/privacy-policy">
                  privacy policy
                </FooterLink>
                <FooterLink href="/more/terms-and-conditions">
                  terms and conditions
                </FooterLink>
              </ul>

              {/* other links visible only in desktop */}
              <ul className="hidden lg:flex flex-col gap-1 w-1/2">
                <FooterLink href="/more/faq">faq</FooterLink>
                <FooterLink href="/more/shipping-policy">returns</FooterLink>
                <FooterLink href="/more/size-guide">size guide</FooterLink>
                <FooterLink href="/more/shipping-policy">payment</FooterLink>
              </ul>
            </div>
          </div>
          <div className="flex gap-3 mt-4 lg:pt-5 flex-wrap overflow-hidden">
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
            <div className="w-14 invisible lg:hidden"></div>
            <Link target="_blank" href="https://trustlock.co">
              <Image
                alt="Trust Badges"
                src="https://trustlock.co/wp-content/uploads/2019/01/guaranteed-safe-checkout-22.png"
                width="115"
                height="65"
                style={{ width: "115px", height: "55px" }}
              />
            </Link>
            <Link
              target="_blank"
              href="https://sslcheck.liquidweb.com/?domain=thesoulspace.in"
            >
              <Image
                alt="Trust Badges"
                src="https://trustlock.co/wp-content/uploads/2019/01/ssl-secure-checkout-trust-seal.png"
                width="115"
                height="65"
                style={{ width: "115px", height: "55px" }}
              />
            </Link>
          </div>
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
