import Link from "next/link";
import { buttonStyles } from "../components/button/Button";
import { fetchCountryData } from "../http";
import { FaArrowLeft } from "react-icons/fa6";
import { twMerge } from "tailwind-merge";
import Image from "next/image";
import { populationFormatter } from "../components/main-section/GridCountriesItem";

type CountryInfoPageProps = {
  params: {
    countrySlug: string;
  };
};

export default async function CountryInfoPage({
  params,
}: CountryInfoPageProps) {
  const countryData = await fetchCountryData(
    params.countrySlug.toLocaleLowerCase()
  );
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
            src={countryData[0].flag}
            alt={`${countryData[0].name}-flag`}
            fill
            sizes="(max-width:768px) 300px, 350px"
            className="absolute object-contain"
          />
        </div>

        <div className="flex flex-col gap-10 pl-6 items-start text-base lg:w-1/2">
          <div className="font-bold text-4xl">{countryData[0].name}</div>

          <div className="flex flex-col gap-8 lg:flex-row">
            <div className="flex flex-col gap-1">
              <div>
                Native Name:{" "}
                {Object.values(countryData[0].nativeName).map((nativeName) => (
                  <span key={nativeName.official} className={digitStlye}>
                    {nativeName.official}
                  </span>
                ))}
              </div>
              <div>
                Population:{" "}
                <span className={digitStlye}>
                  {populationFormatter.format(countryData[0].population)}
                </span>
              </div>
              <div>
                Region:{" "}
                <span className={digitStlye}>{countryData[0].region}</span>
              </div>
              <div>
                Sub Region:{" "}
                <span className={digitStlye}>{countryData[0].subRegion}</span>
              </div>
              <div>
                Captial:{" "}
                <span className={digitStlye}>{countryData[0].capital} </span>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <div>
                Top level Domain:{" "}
                <span className={digitStlye}>{countryData[0].tld} </span>
              </div>
              <div>
                Currencies:{" "}
                {Object.values(countryData[0].currencies).map((currency) => (
                  <span key={currency.name} className={digitStlye}>
                    {currency.name}
                  </span>
                ))}
              </div>
              <div>
                Languages:{" "}
                {Object.values(countryData[0].languages).map((language) => (
                  <span
                    key={`${countryData[0].name} - ${language}`}
                    className={digitStlye}
                  >
                    {language}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 items-start lg:flex-row">
            Border Countries:{" "}
            <div className="flex gap-4 flex-wrap">
              {countryData[0].borders?.map((border) => (
                <span
                  key={`${countryData[0].name}-border-${border}`}
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
