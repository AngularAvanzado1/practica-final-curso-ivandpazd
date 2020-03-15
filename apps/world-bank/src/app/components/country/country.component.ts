import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {CountryInterface} from "../../../../../../libs/shared/domain/src/lib/models/country.interface";
import {ControlService} from "../../services/control.service";

@Component({
  selector: 'app-world-bank-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class CountryComponent implements OnInit {
  public country$: Observable<CountryInterface[]>;
  public countryAPI: string;
  public title = '';
  private regionCode: string;
  constructor(
      private route: ActivatedRoute,
      private http: HttpClient,
      private router: Router,
      private controlService: ControlService,
      private changeDetector: ChangeDetectorRef
  ) {
    this.regionCode = '';
  }

  ngOnInit(): void {
    const countryCode = this.route.snapshot.paramMap.get("id");
    this.countryAPI = 'http://api.worldbank.org/V2/country/' + countryCode + '?format=json';
    this.getCountry();
  }

  /**
   * Go to region screen
   */
  public goToRegion() {
    this.router.navigate(['/region', this.regionCode]);
  }

  /**
   * Go to Continental screen
   */
  public goToContinental() {
    this.router.navigate(['/continental']);
  }

  /**
   * Get regions from API
   */
  private getCountry(): void {
    this.country$ = this.http.get<CountryInterface[]>(this.countryAPI);
    this.controlService.getRegionName(this.country$).then(name => {
      this.regionCode = name;
    });
  }
}
