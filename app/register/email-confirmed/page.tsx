import { email_verified_bg, email_verified_icon } from "@/public/images";
import Image from "next/image";
import Link from "next/link";

const EmailConfirmedPage = () => {
  return (
    <div className="w-full p-3">
      <div className="my-10 lg:p-8 w-[90dvw] h-[80dvh] lg:h-[50dvh] lg:w-1/2 lg:rounded-2xl lg:shadow-lg overflow-hidden mx-auto">
        <div className="flex flex-col lg:flex-row">
          <Image
            className="aspect-w-1 aspect-h-1 w-2/3 lg:w-1/2 mx-auto"
            src={email_verified_icon}
            alt="Email Confirmed Succesfully"
          />
          <div className="flex flex-col gap-3 p-6">
            <h1 className="text-3xl font-semibold">Email Confirmed! 🎉</h1>
            <p className="text-gray-700 break-words">
              Your email has been successfully confirmed. You can now close this
              window and proceed to {/* login page link */}
              <Link href="/login" className="text-yellow-500 font-semibold">
                log in
              </Link>{" "}
              with your email and start exploring our platform.
              <br />
              <br />
              Happy exploring!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailConfirmedPage;
