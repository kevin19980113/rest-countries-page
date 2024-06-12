import Link from "next/link";
import { buttonStyles } from "../components/button/Button";
import { fetchCountryData } from "../http";
import { FaArrowLeft } from "react-icons/fa6";
import { twMerge } from "tailwind-merge";
import Image from "next/image";

type CountryInfoPageProps = {
  params: {
    countrySlug: string;
  };
};

export default async function CountryInfoPage({
  params,
}: CountryInfoPageProps) {
  const countryData = await fetchCountryData(params.countrySlug);
  const digitStlye = "text-slate-600 dark:text-slate-400";

  return (
    <section className="w-full min-h-screen relative flex flex-col gap-16 px-6 py-6 md:px-10 md:py-8">
      <div className="absolute inset-0 dark:bg-darkPrimary-900 -z-10 bg-primary"></div>

      <div className="flex items-start">
        <Link
          href="/"
          className={twMerge(
            buttonStyles(),
            "flex items-center gap-4 px-4 py-1 md:px-6 md:py-2 text-sm md:text-base hover:scale-105"
          )}
        >
          <FaArrowLeft />
          Back
        </Link>
      </div>

      <div className="flex flex-col gap-12 lg:flex-row items-start lg:items-center">
        <div className="relative w-full lg:w-1/2 aspect-video flex-shrink-0">
          <Image
            src={countryData.flag}
            alt={`${countryData.name}-flag`}
            fill
            sizes="(max-width:768px) 300px, 350px"
            className="absolute object-contain"
          />
        </div>

        <div className="flex flex-col gap-10 pl-6 items-start text-base whitespace-nowrap lg:w-1/2">
          <div className="font-bold text-4xl">{countryData.name}</div>

          <div className="flex flex-col gap-8 lg:flex-row">
            <div className="flex flex-col gap-1">
              <div>Native Name</div>
              <div>
                Population:{" "}
                <span className={digitStlye}>{countryData.population}</span>
              </div>
              <div>
                Region: <span className={digitStlye}>{countryData.region}</span>
              </div>
              <div>Sub Region:</div>
              <div>
                Captial:{" "}
                <span className={digitStlye}>{countryData.capital} </span>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <div>Top level Domain: </div>
              <div>
                Currencies:{" "}
                <span className={digitStlye}>{countryData.currency}</span>
              </div>
              <div>Languages:</div>
            </div>
          </div>

          <div className="flex flex-col gap-4 items-start lg:flex-row">
            Border Countries:{" "}
            <div className="flex gap-4">
              {countryData.borders.map((border) => (
                <span
                  key={`${countryData.name}-border-${border}`}
                  className={twMerge(buttonStyles(), "px-8 py-1")}
                >
                  {border}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
