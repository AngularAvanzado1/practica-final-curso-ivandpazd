import { TestBed } from '@angular/core/testing';

import { ControlService } from './control.service';

describe('ControlService', () => {
  let service: ControlService;
  const countryObservable = [{"page":1,"pages":1,"per_page":"50","total":1},[{"id":"CAN","iso2Code":"CA","name":"Canada","region":{"id":"NAC","iso2code":"XU","value":"North America"},"adminregion":{"id":"","iso2code":"","value":""},"incomeLevel":{"id":"HIC","iso2code":"XD","value":"High income"},"lendingType":{"id":"LNX","iso2code":"XX","value":"Not classified"},"capitalCity":"Ottawa","longitude":"-75.6919","latitude":"45.4215"}]];

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ControlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should goToRegion OK', () => {
    spyOn(service, 'getRegionName').and.returnValue(Promise.resolve(countryObservable));
    service.getRegionName(countryObservable).then(
        (res) => {
          expect(res).toEqual(countryObservable);
        }
    );
  });
});
