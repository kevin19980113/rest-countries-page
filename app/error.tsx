"use client";

import { twMerge } from "tailwind-merge";
import { buttonStyles } from "./components/button/Button";
export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  function handleRetry() {
    window.location.reload();
  }

  return (
    <div className="w-full min-h-screen relative flex flex-col justify-center items-center gap-12">
      <div className="absolute inset-0 dark:bg-darkPrimary-900 -z-10 bg-primary"></div>
      <h2 className="text-4xl text-red-400">{`Sorry,,,,${error.message}`}</h2>
      <button
        className={twMerge(
          buttonStyles(),
          "px-10 py-2 text-lg hover:scale-105"
        )}
        onClick={handleRetry}
      >
        Try again
      </button>
    </div>
  );
}
