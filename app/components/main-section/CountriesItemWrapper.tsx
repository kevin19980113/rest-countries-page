"use client";

import Search from "@/app/components/search/Search";
import GridCountriesItem from "./GridCountriesItem";
import FilterDropbox from "../filter/FilterDropbox";
import { useFilterSearchContext } from "@/app/context/FilterSearchContext";
import { useMemo } from "react";

type CountryData = {
  name: string;
  region: string;
  flag: string;
  capital: string;
  population: number;
};

type AllCountriesItemWrapperProps = {
  countriesData: CountryData[];
};

export default function CountriesItemWrapper({
  countriesData,
}: AllCountriesItemWrapperProps) {
  const { state } = useFilterSearchContext();
  const { searchValue, filterValue } = state;

  const filteredCountries = useMemo(() => {
    let result = countriesData;

    if (searchValue) {
      result = result.filter((country) =>
        country.name.toLowerCase().includes(searchValue.toLowerCase())
      );
    }

    if (filterValue && filterValue !== "All") {
      result = result.filter((country) => {
        return country.region.toLowerCase().includes(filterValue.toLowerCase());
      });
    }

    return result;
  }, [countriesData, searchValue, filterValue]);

  return (
    <>
      <div className="w-full flex flex-col items-start gap-10 md:flex-row md:justify-between md:items-center z-10">
        <Search />
        <FilterDropbox />
      </div>

      <section className="w-full grid gap-10 grid-cols-1 md:grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
        {filteredCountries.map((country) => (
          <GridCountriesItem
            key={country.name}
            flag={country.flag}
            name={country.name}
            population={country.population}
            region={country.region}
            capital={country.capital}
          />
        ))}
      </section>
    </>
  );
}
