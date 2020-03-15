import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContinentalRegionsComponent } from './continental-regions.component';
import {DataTemplateComponent} from "../../../../../../libs/shared/ui/src/lib/data-template/data-template.component";
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {Router} from "@angular/router";

describe('ContinentalRegionsComponent', () => {
  let component: ContinentalRegionsComponent;
  let fixture: ComponentFixture<ContinentalRegionsComponent>;
  const routerSpy = {
    navigate: jasmine.createSpy('navigate')
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContinentalRegionsComponent, DataTemplateComponent ],
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [
        { provide: Router, useValue: routerSpy }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContinentalRegionsComponent);
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should goToRegion OK', () => {
    expect(component.goToRegion('EAS'));
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/region', 'EAS']);
  });
});
