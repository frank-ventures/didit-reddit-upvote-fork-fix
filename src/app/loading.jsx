import "ldrs/squircle";

export default function Loading() {
  return (
    <div className="loading-container flex flex-col items-center justify-center h-screen gap-2">
      <h2>Loading thing...</h2>
      <l-squircle
        size="37"
        stroke="5"
        stroke-length="0.15"
        bg-opacity="0.1"
        speed="0.9"
        color="black"
      ></l-squircle>
    </div>
  );
}
