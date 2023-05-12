import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'countries-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [
  ]
})
export class ByCountryPageComponent {

  public countries: Country[] = [];

  constructor ( private countriesService: CountriesService ) {}



  public searchByCountry ( term: string): void {
    this.countriesService.SearchCountry( term )
    .subscribe( countries =>{
      this.countries = countries;
    });
  }




}
