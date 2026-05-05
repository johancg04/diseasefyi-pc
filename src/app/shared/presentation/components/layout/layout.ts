import {Component, inject, OnInit} from '@angular/core';
import {MatSidenavContainer, MatSidenavContent} from '@angular/material/sidenav';
import {LanguageSwitcher} from '../language-switcher/language-switcher';
import {MatToolbar} from '@angular/material/toolbar';
import {Footer} from '../footer/footer';
import {CountryStore} from '../../../../diseasefyi/application/country.store';
import {CountryList} from '../../../../diseasefyi/presentation/components/country-list/country-list';
import {environment} from '../../../../../environments/environment';
import {LogoDevApi} from '../../../infrastructure/logo-dev-api';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-layout',
  imports: [
    MatSidenavContainer,
    MatSidenavContent,
    LanguageSwitcher,
    MatToolbar,
    Footer,
    CountryList,
    TranslatePipe
  ],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout implements OnInit {
  protected store = inject(CountryStore)
  protected readonly countries = this.store.countries
  private logoApi = inject(LogoDevApi);
  protected logoUrl = '';

  constructor() {
    this.logoUrl = this.logoApi.getUrlToLogo(environment.diseaseProviderApiBaseUrl);
  }

  ngOnInit(): void {
      this.store.loadCountries()
  }
}
