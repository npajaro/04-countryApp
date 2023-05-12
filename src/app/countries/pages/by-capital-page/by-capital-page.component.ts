import { Component, EventEmitter, Output } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styleUrls: [

  ]
})
export class ByCapitalPageComponent {

  public countries: Country[] = [];

  constructor ( private countriesService: CountriesService ){}

  public searchByCapital( term: string ): void {
    this.countriesService.SearchCapital( term)
    .subscribe( countries => {
      this.countries = countries;
    });
  }

}
