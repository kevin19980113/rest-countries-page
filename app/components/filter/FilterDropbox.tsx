"use client";

import { IoIosArrowDown } from "react-icons/io";
import { twMerge } from "tailwind-merge";
import { buttonStyles } from "../button/Button";
import { useState } from "react";
import { useFilterSearchContext } from "@/app/context/FilterSearchContext";

export default function FilterDropbox() {
  const [isDropboxOpen, setIsDropboxOpen] = useState(false);
  const { state, dispatch } = useFilterSearchContext();

  const listStyles =
    "w-full px-2 py-1 rounded-md hover:bg-secondary dark:hover:bg-darkPrimary-900 ";
  const Region = ["All", "Africa", "America", "Asia", "Europe", "Oceania"];

  function handleRegionClick(region: string) {
    dispatch({ type: "SET_FILTER_VALUE", payload: region });
  }

  return (
    <div
      className={twMerge(
        buttonStyles(),
        "flex flex-col items-center cursor-pointer px-6 py-2 relative text-sm md:text-base"
      )}
      onClick={() => {
        setIsDropboxOpen((prev) => !prev);
      }}
    >
      <div
        className="flex items-center gap-10 whitespace-nowrap
      "
      >
        {state.filterValue ? state.filterValue : "Filter By Region"}
        <IoIosArrowDown
          className={`transtion duration-300 ${
            isDropboxOpen ? "transform -rotate-180" : "transform rotate-0"
          }`}
        />
      </div>

      <div
        className={`w-full overflow-hidden absolute top-0 translate-y-[50px] grid
          rounded-lg bg-primary-100 dark:bg-darkPrimary-800 shadow-lg
          ${isDropboxOpen ? "grid-rows-1 px-4 py-2" : "grid-rows-[0]"}`}
      >
        <ul className="w-full">
          {Region.map((region) => (
            <li
              key={region}
              className={listStyles}
              onClick={() => handleRegionClick(region)}
            >
              {region}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
