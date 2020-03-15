import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegionInterface } from "@generic/domain";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-world-bank-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.scss']
})
export class RegionComponent implements OnInit {
  public regions$: Observable<RegionInterface[]>;
  public regionsAPI: string;
  public continentalRegionsAPI: string;
  public title = '';
  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    const regionCode = this.route.snapshot.paramMap.get("code");
    this.continentalRegionsAPI = 'http://api.worldbank.org/v2/region/?format=json';
    this.regionsAPI = 'http://api.worldbank.org/v2/region/' + regionCode + '/country?per_page=1000&format=json';
    this.getRegions();
    this.getContinentalRegionName(regionCode);
  }

  /**
   * Go to Country screen
   *
   * @param id
   */
  public goToCountry(id: string) {
    this.router.navigate(['/country', id]);
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
  private getRegions(): void {
    this.regions$ = this.http.get<RegionInterface[]>(this.regionsAPI);
  }

  /**
   * Get ContinentalRegions name from API
   */
  private getContinentalRegionName(code: string): void {
    this.http.get(this.continentalRegionsAPI).subscribe(
        continentalRegions => {
          for (const continent of continentalRegions[1]) {
            if (continent.code === code) {
              this.title = 'Regions of ' + continent.name;
            }
          }
        });
  }
}
