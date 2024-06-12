import AllCountriesItemWrapper from "@/app/components/main-section/CountriesItemWrapper";
import { fetchAllCountriesData } from "./http";
import FilterSearchContextProvider from "./context/FilterSearchContext";

export default async function Home() {
  const countriesData = await fetchAllCountriesData();

  return (
    <div
      className="w-full min-h-screen relative flex flex-col items-center px-4 py-6 gap-y-8
    tansition-all duration-500 ease-in-out md:px-10 md:py-8"
    >
      <div className="absolute inset-0 dark:bg-darkPrimary-900 -z-10 bg-primary"></div>
      <FilterSearchContextProvider>
        <AllCountriesItemWrapper countriesData={countriesData} />
      </FilterSearchContextProvider>
    </div>
  );
}
