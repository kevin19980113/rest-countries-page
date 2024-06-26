import Link from "next/link";
import DarkMode from "./DarkMode";

export default function MainHeader() {
  return (
    <header
      className="flex justify-between items-center gap-4 
    shadow-md px-4 py-8 sm:text-base text-sm md:text-lg md:px-12 md:py-4 
    dark:bg-darkPrimary dark:text-white dark:shadow-2xl"
    >
      <Link href="/" className="font-bold px-4">
        Where In The World?
      </Link>
      <DarkMode />
    </header>
  );
}
