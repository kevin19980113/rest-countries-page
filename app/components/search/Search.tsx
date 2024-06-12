import { FaSearch } from "react-icons/fa";
import { buttonStyles } from "../button/Button";
import { twMerge } from "tailwind-merge";
import { useRef } from "react";
import { useFilterSearchContext } from "@/app/context/FilterSearchContext";

export default function Search() {
  const inputRef = useRef<HTMLInputElement>(null);
  const { dispatch } = useFilterSearchContext();

  function handleSearchChange() {
    if (inputRef.current?.value === undefined) return;

    dispatch({
      type: "SET_SEARCH_VALUE",
      payload: inputRef.current?.value,
    });
  }

  return (
    <div
      className={twMerge(
        buttonStyles(),
        "w-full flex gap-4 items-center px-4 py-3 text-sm md:w-auto md:text-base cursor-text"
      )}
    >
      <FaSearch className="flex-shrink-0" />
      <input
        type="text"
        placeholder="Search for a country..."
        className="flex-grow bg-inherit border-none outline-none"
        ref={inputRef}
        onChange={handleSearchChange}
      />
    </div>
  );
}
