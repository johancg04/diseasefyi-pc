import {Country} from '../domain/model/country.entity';
import {CountryResource, CountryResponse} from './country-response';

export class CountryAssembler {

  static toEntityFromResource(resource: CountryResource): Country{
    return {
      country: resource.country,
      cases: resource.cases,
      deaths: resource.deaths,
      recovered: resource.recovered,
      population:resource.population,
      continent: resource.continent
    }
  };

  static toEntitiesFromResponse(response: CountryResponse): Country[]{
    return response.countries.map(country => this.toEntityFromResource(country));
  }
}
