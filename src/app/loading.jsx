"use client";
// import "ldrs/ring";

import { ring } from "ldrs";

export default function Loading() {
  ring.register();

  return (
    <div className="loading-container flex flex-col items-center justify-center h-screen gap-2">
      <h2>Loading thing...</h2>
      <l-ring
        size="40"
        stroke="5"
        bg-opacity="0"
        speed="2"
        color="black"
      ></l-ring>
    </div>
  );
}
