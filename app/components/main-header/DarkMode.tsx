"use client";

import { MdOutlineDarkMode, MdDarkMode } from "react-icons/md";
import { buttonStyles } from "../button/Button";
import { twMerge } from "tailwind-merge";
import { useTheme } from "next-themes";

export default function DarkMode() {
  const { theme, setTheme } = useTheme();

  return (
    <div
      className={twMerge(
        buttonStyles({ type: "ghost" }),
        "flex gap-2 items-center px-4 py-2 whitespace-nowrap"
      )}
      onClick={() => {
        theme === "dark" ? setTheme("light") : setTheme("dark");
      }}
    >
      {theme === "dark" ? <MdDarkMode /> : <MdOutlineDarkMode />}
      Dark Mode
    </div>
  );
}
