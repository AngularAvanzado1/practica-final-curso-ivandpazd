import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContinentalRegionsComponent } from './continental-regions.component';

describe('ContinentalRegionsComponent', () => {
  let component: ContinentalRegionsComponent;
  let fixture: ComponentFixture<ContinentalRegionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContinentalRegionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContinentalRegionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
