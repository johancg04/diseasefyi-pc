import { Component, inject, input } from '@angular/core';
import { Country } from '../../../domain/model/country.entity';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  MatCard, MatCardActions,
  MatCardContent,
  MatCardHeader, MatCardImage,
  MatCardSubtitle,
  MatCardTitle,
  MatCardTitleGroup
} from '@angular/material/card';
import {MatIcon} from '@angular/material/icon';
import {TranslatePipe} from '@ngx-translate/core';
import {MatButton, MatIconButton} from '@angular/material/button';

@Component({
  selector: 'app-country-item',
  imports: [
    MatCard,
    MatCardHeader,
    MatCardTitleGroup,
    MatCardTitle,
    MatCardSubtitle,
    MatCardContent,
    MatCardActions,
    TranslatePipe,
    MatButton,
    MatIconButton,
    MatCardImage,
  ],
  templateUrl: './country-item.html',
  styleUrl: './country-item.css',
})
export class CountryItem {
  country = input.required<Country>();

  private snackBar = inject(MatSnackBar);

  protected getCountryUrl(): string {
    const countryName = this.country()?.country?.toLowerCase().replace(/\s+/g, '-');
    return `https://disease.sh/v3/covid-19/countries/${countryName}`;
  }

  async share() {
    const shareUrl = this.getCountryUrl();
    const shareData = {
      title: `COVID-19 data: ${this.country()?.country}`,
      url: shareUrl,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        this.snackBar.open('Shared successfully!', 'Close', { duration: 3000 });
      } catch (error) {
        this.snackBar.open('Sharing failed', 'Close', { duration: 3000 });
      }
    } else {
      try {
        await navigator.clipboard.writeText(shareUrl);
        this.snackBar.open('URL copied to clipboard', 'Close', { duration: 3000 });
      } catch (error) {
        this.snackBar.open('Copying failed', 'Close', { duration: 3000 });
      }
    }
  }
}
