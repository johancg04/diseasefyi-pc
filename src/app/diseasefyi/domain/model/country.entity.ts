export class Country {
  country: string;
  cases: number;
  deaths: number;
  recovered: number;
  population: number;
  continent: string;

  constructor() {
    this.country = "";
    this.cases = 0;
    this.deaths = 0;
    this.recovered = 0;
    this.population = 0;
    this.continent = "";
  }
}
