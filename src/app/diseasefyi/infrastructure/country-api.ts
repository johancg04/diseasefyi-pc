import {environment} from '../../../environments/environment';
import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CountryResponse} from './country-response';

@Injectable({providedIn: 'root'})

export class CountryApi {
  baseUrl: environment.diseaseProviderApiBaseUrl;
  private sourcesEndpoint = environment.diseaseProviderDiseaseEndpointPath;

  private http = inject(HttpClient);

  getCountries(){
    return this.http.get<CountryResponse>(`${this.baseUrl}/${this.sourcesEndpoint}`);
  }
}
