"use client";

import { twMerge } from "tailwind-merge";
import { buttonStyles } from "@/app/components/button/Button";
import Link from "next/link";
export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  return (
    <div className="w-full min-h-screen relative flex flex-col justify-center items-center gap-12">
      <div className="absolute inset-0 dark:bg-darkPrimary-900 -z-10 bg-primary"></div>
      <h2 className="text-4xl text-red-400">{`Sorry,,,,${error.message}`}</h2>
      <Link
        className={twMerge(
          buttonStyles(),
          "px-10 py-2 text-lg hover:scale-105"
        )}
        href="/"
      >
        Go back
      </Link>
    </div>
  );
}
