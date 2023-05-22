import LoginForm from "@/components/Auth/LoginForm";
import { login_asset } from "@/public/images";
import { getServerSession } from "next-auth";
import Image from "next/image";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import Link from "next/link";

const Login: any = async () => {
  const csrfToken = cookies().get("next-auth.csrf-token")?.value.split("|")[0];
  const session = await getServerSession(authOptions);

  if (session?.user) {
    redirect("/");
  }
  return (
    <div className="flex flex-col lg:flex-row p-10 sm:p-16 md:px-40 md:pt-8 lg:gap-10 2xl:px-60 2xl:gap-20">
      <div className="max-w-lg md:max-w-none md:flex flex-col lg:w-6/12 gap-5 lg:gap-0 lg:flex-col-reverse">
        <div className="hidden md:flex justify-end select-none ">
          <Image src={login_asset} alt="Log In" />
        </div>
        <div className="flex flex-col gap-5 transform lg:translate-y-14 2xl:items-end">
          <h1 className="font-extrabold md:font-bold text-gray-900 text-6xl xl:text-8xl font-sans flex flex-col 2xl:text-right">
            <span className="text-2xl font-bold">Welcome Back,</span>
            <span className="text-yellow-400">Art Enthusiast!</span>
          </h1>
          <h1 className="font-medium text-lg text-gray-600 max-w-xl 2xl:text-right">
            Login to reconnect with your saved favorites and explore new
            paintings.
          </h1>
        </div>
      </div>
      <div className="sm:max-w-lg lg:w-6/12">
        <div className="flex flex-col gap-3 lg:gap-6 w-full lg:mt-5">
          <div className="w-full mt-8">
            <h1 className="p-1 pl-0 text-gray-900 font-bold text-2xl lg:text-3xl border-b-4 border-yellow-500 w-fit">
              Log In
            </h1>
          </div>
          <LoginForm csrfToken={csrfToken} />
          <div className="">
            <Link
              href="/register"
              className="text-gray-600 text-sm font-medium transition-all hover:scale-110"
            >
              Don't have an account?{" "}
              <span className="text-yellow-500">Register Now</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
