import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryComponent } from './country.component';
import {DataTemplateComponent} from "../../../../../../libs/shared/ui/src/lib/data-template/data-template.component";
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {ControlService} from "../../services/control.service";

describe('CountryComponent', () => {
  let component: CountryComponent;
  let fixture: ComponentFixture<CountryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryComponent, DataTemplateComponent ],
      imports: [ RouterTestingModule, HttpClientTestingModule ],
      providers: [ ControlService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryComponent);
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
