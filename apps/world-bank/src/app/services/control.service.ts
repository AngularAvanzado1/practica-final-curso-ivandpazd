import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ControlService {
  constructor() { }

  /**
   * Get region name of the country
   */
  public getRegionName(countryObservable): Promise<any> {
    return new Promise((resolve, _reject) => {
      countryObservable.subscribe(country => {
        resolve(country[1][0].region.id);
      });
    });
  }
}
