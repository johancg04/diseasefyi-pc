export interface CountryResponse {
  countries: CountryResource[]
}

export interface CountryResource {
  country: string;
  cases: number;
  deaths: number;
  recovered: number;
  population: number;
  continent: string;
}
