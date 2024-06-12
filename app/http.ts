const API_URL_FOR_ALL = "https://restcountries.com/v3.1/all";
const API_URL_FOR_ONE = "https://restcountries.com/v3.1/name";

// border countries X
type NativeName = {
  [key: string]: {
    official: string;
    common: string;
  };
} | null;

type Languages = {
  [key: string]: string;
};

type Currencies = {
  [key: string]: {
    name: string;
    symbol: string;
  };
};

type CountryData = {
  name: {
    official: string;
    nativeName: NativeName;
  };
  region: string | null;
  subregion: string | null;
  languages: Languages | null;
  flags: {
    png: string;
    svg: string;
  };
  capital: string | null;
  population: number | null;
  currencies: Currencies | null;
  tld: string | null;
  borders: string[] | null;
};

function AllCountriesDataProcessor(data: CountryData[]) {
  return data.map((country) => {
    return {
      name: country.name.official,
      region: country.region ? country.region : "Unknown",
      flag: country.flags.svg,
      capital: country.capital ? country.capital : "Unknown",
      population: country.population ? country.population : 0,
    };
  });
}

function countryDataProcessor(data: CountryData[]) {
  return data.map((country) => {
    return {
      name: country.name.official,
      nativeName: country.name.nativeName
        ? country.name.nativeName
        : { unknown: { official: "Unknown", common: "Unknown" } },
      region: country.region ? country.region : "Unknown",
      subRegion: country.subregion ? country.subregion : "Unknown",
      languages: country.languages ? country.languages : { unknown: "Unknown" },
      flag: country.flags.svg,
      capital: country.capital ? country.capital : "Unknown",
      population: country.population ? country.population : 0,
      currencies: country.currencies
        ? country.currencies
        : {
            unkonwn: {
              name: "Unknown",
              symbol: "Unknown",
            },
          },
      tld: country.tld ? country.tld : "Unknown",
      borders: country.borders ? country.borders : null,
    };
  });
}

export async function fetchAllCountriesData() {
  const response = await fetch(API_URL_FOR_ALL);

  if (!response.ok) {
    throw new Error("Failed to fetch countries data.");
  }

  const data = await response.json();

  const processedData = AllCountriesDataProcessor(data);

  return processedData;
}

export async function fetchCountryData(countryName: string) {
  const response = await fetch(
    `${API_URL_FOR_ONE}/${countryName}?fullText=true`,
    {}
  );

  if (!response.ok) {
    throw new Error("Failed to fetch countries data.");
  }

  const data = await response.json();

  const processedData = countryDataProcessor(data);

  return processedData;
}
