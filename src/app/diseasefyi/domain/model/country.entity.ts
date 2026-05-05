export class CountryInfo {
  flag: string;

  constructor() {
    this.flag = '';
  }
}

export class Country {
  country: string;
  countryInfo: CountryInfo;
  cases: number;
  deaths: number;
  recovered: number;
  population: number;
  continent: string;

  constructor() {
    this.country = '';
    this.countryInfo = new CountryInfo();
    this.cases = 0;
    this.deaths = 0;
    this.recovered = 0;
    this.population = 0;
    this.continent = '';
  }
}
