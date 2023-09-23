"use client"; // Error components must be Client Components

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="w-[90vw] maxx-w-3xl mx-auto p-2 md:p-10">
      <h2 className="font-semibold text-gray-800 text-3xl">
        Something went wrong!
      </h2>
      <p className="text-red-500 text-sm">
        {
          // convert the error to a string to display to the user
          error.toString()
        }
      </p>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
      <p className="text-gray-500 text-sm mt-24">
        Please contact us if you think this is a mistake.
      </p>
    </div>
  );
}
