"use client";

import Link from "next/link";
import { signIn } from "next-auth/react";

export default function VoteError() {
  return (
    <div className="error-container flex flex-col justify-center h-screen items-center gap-5">
      <h2>Oh no! 🙈 </h2>
      <p className="p-2 m-4  bg-orange-200 rounded-lg border-red-500 border">
        You cannot vote on a post without being logged in
      </p>
      <Link
        href={"/"}
        className="border-2 border-slate-600 p-4 hover:shadow-xl hover:bg-slate-200"
      >
        Go home
      </Link>
      <button
        onClick={() => signIn()}
        className="border-2 border-slate-600 p-4 hover:shadow-xl hover:bg-slate-200"
      >
        Sign In
      </button>
    </div>
  );
}
