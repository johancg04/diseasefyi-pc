import {Component, input} from '@angular/core';
import {Country} from '../../../domain/model/country.entity';
import {CountryItem} from '../country-item/country-item';

@Component({
  selector: 'app-country-list',
  imports: [CountryItem],
  templateUrl: './country-list.html',
  styleUrl: './country-list.css',
})
export class CountryList {
  countries=input.required<Array<Country>>();
}
