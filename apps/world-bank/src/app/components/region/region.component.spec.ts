import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionComponent } from './region.component';
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {DataTemplateComponent} from "../../../../../../libs/shared/ui/src/lib/data-template/data-template.component";

describe('RegionComponent', () => {
  let component: RegionComponent;
  let fixture: ComponentFixture<RegionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegionComponent, DataTemplateComponent ],
      imports: [ RouterTestingModule, HttpClientTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegionComponent);
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
