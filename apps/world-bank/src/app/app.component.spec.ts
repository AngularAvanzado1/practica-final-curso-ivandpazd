import { SharedUiModule } from "@generic/ui";
import {TestBed, async, ComponentFixture} from "@angular/core/testing";
import { AppComponent } from "./app.component";
import { RouterTestingModule } from "@angular/router/testing";
import {ServiceWorkerModule} from "@angular/service-worker";
import {ContinentalRegionsComponent} from "./components/continental-regions/continental-regions.component";
import {CountryComponent} from "./components/country/country.component";
import {RegionComponent} from "./components/region/region.component";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe("AppComponent", () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, SharedUiModule,
        HttpClientTestingModule, ServiceWorkerModule.register('', {enabled: false})
      ],
      declarations: [AppComponent, ContinentalRegionsComponent, CountryComponent, RegionComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it("should call checkVersionUpdates when creates", () => {
    expect(component.checkVersionUpdates());
  });
});
