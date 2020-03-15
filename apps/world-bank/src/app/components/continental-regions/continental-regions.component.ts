import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {ContinentalInterface} from "@generic/domain";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-world-bank-continental-regions',
  templateUrl: './continental-regions.component.html',
  styleUrls: ['./continental-regions.component.scss']
})
export class ContinentalRegionsComponent implements OnInit {
  public continentalRegions$: Observable<ContinentalInterface[]>;
  public continentalRegionsAPI: string;
  public title: string;
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.continentalRegionsAPI = 'http://api.worldbank.org/v2/region/?format=json';
    this.title = 'Continental Regions';
    this.getContinentalRegions();
  }

  /**
   * Go to Region screen
   *
   * @param code
   */
  public goToRegion(code: string) {
    this.router.navigate(['/region', code]);
  }

  /**
   * Get ContinentalRegions from API
   */
  private getContinentalRegions(): void {
    this.continentalRegions$ = this.http.get<ContinentalInterface[]>(this.continentalRegionsAPI);
  }

}
