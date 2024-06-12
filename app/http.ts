const API_URL_FOR_ALL = "https://restfulcountries.com/api/v1/countries";
//TEMPORARY API URL
const API_KEY = "1194|owTA5sUF8RCpXkNmpllotxWDKkzaHcN66Rw1ZU8G";

type AllCountriesData = {
  name: string;
  href: { flag: string };
  population: string;
  continent: string | null;
  capital: string | null;
};

//Native Name X / Top level Domain X / Population O / Currency O
// Region O /Languages X / capital O / border countries X

type CountryData = {
  name: string;
  href: { flag: string };
  population: string;
  currency: string;
  region: string | null;
  capital: string | null;
};

function AllCountriesDataProcessor(data: AllCountriesData[]) {
  return data.map((country) => {
    return {
      name: country.name,
      flag: country.href.flag,
      population: country.population,
      region: country.continent ? country.continent : "Unknown",
      capital: country.capital ? country.capital : "Unknown",
      /* some data has null,,, change null to Unknown*/
    };
  });
}

function countryDataProcessor(data: CountryData) {
  return {
    name: data.name,
    flag: data.href.flag,
    population: data.population,
    currency: data.currency,
    region: data.region ? data.region : "Unknown",
    capital: data.capital ? data.capital : "Unknown",
  };
}

export async function fetchAllCountriesData() {
  const response = await fetch(API_URL_FOR_ALL, {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch countries data.");
  }

  const data = await response.json();

  const processedData = AllCountriesDataProcessor(data.data);

  return processedData;
}

export async function fetchCountryData(countryName: string) {
  const response = await fetch(`${API_URL_FOR_ALL}/${countryName}`, {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch countries data.");
  }

  const data = await response.json();

  const processedData = countryDataProcessor(data.data);

  return processedData;
}
