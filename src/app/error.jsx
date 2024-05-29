"use client";

import Link from "next/link";

export default function GlobalError({ error, reset }) {
  return (
    <div className="error-container flex flex-col justify-center h-screen items-center gap-5">
      <h2>Oh no! 🙈 Something went wrong on that page: </h2>
      <p className="p-2 m-4  bg-orange-200 rounded-lg border-red-500 border">
        {error.message}
      </p>
      {/* <Link
        href={"/"}
        className="border-2 border-slate-600 p-4 hover:shadow-xl"
      >
        Go back to the home page
      </Link> */}

      <button
        onClick={() => reset()}
        className="border-2 border-slate-600 p-4 hover:shadow-xl"
      >
        Go back
      </button>
    </div>
  );
}
