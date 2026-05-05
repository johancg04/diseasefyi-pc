import {environment} from '../../../environments/environment';
import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CountryResponse} from './country-response';
import {map, Observable} from 'rxjs';
import {CountryAssembler} from './country-assembler';
import {Country} from '../domain/model/country.entity';

@Injectable({providedIn: 'root'})

export class CountryApi {
  baseUrl= environment.diseaseProviderApiBaseUrl;
  private sourcesEndpoint = environment.diseaseProviderDiseaseEndpointPath;

  private http = inject(HttpClient);

  getCountries(): Observable<Country[]>{
    return this.http.get<CountryResponse[]>(`${this.baseUrl}${this.sourcesEndpoint}`).pipe(
      map(response => CountryAssembler.toEntitiesFromResponse(response))
    );
  }
}
