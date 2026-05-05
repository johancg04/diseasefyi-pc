import {computed, inject, Injectable, signal} from '@angular/core';
import {Country} from '../domain/model/country.entity';
import {CountryApi} from '../infrastructure/country-api';

@Injectable({providedIn: 'root'})

export class CountryStore {
  private countriesSignal = signal<Country[]>([])
  private countriesApi = inject(CountryApi);

  readonly countries = computed(() => this.countriesSignal());

  private _currentCountry!: Country;

  get currentCountry() :Country{
    return this._currentCountry;
  }

  set currentCountry(value:Country){
    this._currentCountry = value;
  }

  loadCountries(){
    if(this.countriesSignal().length === 0){
      this.countriesApi.getCountries().subscribe(countries=>{
        this.countriesSignal.set(countries);
        this._currentCountry = countries[0];
      });
    }
  }
}
