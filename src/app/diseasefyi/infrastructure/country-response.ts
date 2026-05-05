export interface CountryInfo {
  flag: string;
}

export interface CountryResponse {
  country: string;
  countryInfo: CountryInfo;
  cases: number;
  deaths: number;
  recovered: number;
  population: number;
  continent: string;
}

export interface CountryResource {
  country: string;
  countryInfo: CountryInfo;
  cases: number;
  deaths: number;
  recovered: number;
  population: number;
  continent: string;
}
