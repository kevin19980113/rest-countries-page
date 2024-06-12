import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { buttonStyles } from "../button/Button";
import Link from "next/link";

type GridCountriesItemProps = {
  flag: string;
  name: string;
  population: string;
  region: string;
  capital: string;
};

// const populationFormatter = new Intl.NumberFormat("en-US", {
//   style: "decimal",
//   useGrouping: true,
// });

export default function GridCountriesItem({
  flag,
  name,
  population,
  region,
  capital,
}: GridCountriesItemProps) {
  const digitStlye = "text-slate-600";
  return (
    <Link
      className={twMerge(
        buttonStyles(),
        "flex flex-col items-start gap-6 cursor-pointer hover:scale-[1.02] md:hover:scale-105 "
      )}
      href={`/${name}`}
    >
      <div className="relative w-full aspect-video">
        <Image
          src={flag}
          alt={`${name}-flag`}
          fill
          sizes="(max-width:768px) 300px, 350px"
          className="absolute object-cover"
        />
      </div>
      <div className="w-full flex flex-col gap-1 px-6 mb-6 text-sm md:text-base">
        <p className="font-extrabold mb-2 text-base md:text-lg">{name}</p>
        <p>
          population: <span className={digitStlye}>{population}</span>
        </p>
        <p>
          region: <span className={digitStlye}>{region}</span>
        </p>
        <p>
          capital: <span className={digitStlye}>{capital}</span>
        </p>
      </div>
    </Link>
  );
}
