"use client";

import { logo } from "@/public/images";

import { showToast } from "./Toast";
import Image from "next/image";

const LaunchingSoon = () => {
  return (
    <div className="bg-gray-100">
      <div className="min-h-screen flex items-center justify-center">
        <div className="max-w-2xl w-full px-4">
          <div className="lg:w-1/2 mx-auto p-16">
            <Image alt="logo" src={logo} />
          </div>
          <h1 className="text-6xl font-bold text-center mb-8">Coming Soon!</h1>
          <p className="text-lg text-gray-600 text-center mb-12">
            Our website is under construction. We'll be back soon!
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              showToast(
                "Thanks for your interest. We'll notify you when we launch!",
                "success"
              );
            }}
            className="flex flex-col md:flex-row justify-center items-center gap-4"
          >
            <input
              className="w-full md:w-80  py-2 px-4 border text-gray-800 border-gray-200 bg-white"
              type="email"
              placeholder="Enter your email address"
            />
            <button
              type="submit"
              className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 border"
            >
              Notify Me
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export { LaunchingSoon };
