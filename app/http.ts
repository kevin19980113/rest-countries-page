const API_URL_FOR_ALL = "https://restcountries.com/v3.1/all";
const API_URL_FOR_ONE = "https://restcountries.com/v3.1/name";

// border countries X
type NativeName = {
  [key: string]: {
    official: string;
    common: string;
  };
};

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
  region: string;
  subregion: string;
  languages: Languages;
  flags: {
    png: string;
    svg: string;
  };
  capital: string;
  population: number;
  currencies: Currencies;
  tld: string;
  borders: string[] | null;
};

function AllCountriesDataProcessor(data: CountryData[]) {
  return data.map((country) => {
    return {
      name: country.name.official,
      region: country.region,
      flag: country.flags.svg,
      capital: country.capital,
      population: country.population,
    };
  });
}

function countryDataProcessor(data: CountryData[]) {
  return data.map((country) => {
    return {
      name: country.name.official,
      nativeName: country.name.nativeName,
      region: country.region,
      subRegion: country.subregion,
      languages: country.languages,
      flag: country.flags.svg,
      capital: country.capital,
      population: country.population,
      currencies: country.currencies,
      tld: country.tld,
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
    if (response.status === 404) {
      throw new Error("We can't find this country");
    }
    throw new Error("Failed to fetch countries data.");
  }

  const data = await response.json();

  const processedData = countryDataProcessor(data);

  return processedData;
}
