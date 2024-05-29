"use client";
// import { signIn } from "@/auth.js";
import { signIn } from "next-auth/react";

export function LoginButton() {
  // async function handleLogin() {
  //   "use server";
  //   await signIn();
  // }

  return (
    // <form
    //   action={async () => {
    //     "use server";
    //     await signIn();
    //   }}
    //   className="inline"
    // >
    //   <button
    //     className="bg-pink-300 text-black px-3 py-2 rounded"
    //     type="submit"
    //   >
    //     Login
    //   </button>
    // </form>
    <button onClick={() => signIn()}>Sign In</button>
  );
}
