import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment';
import { AppComponent } from "./app.component";
import { RouterModule, Routes } from "@angular/router";
import { SharedUiModule } from "@generic/ui";
import { ContinentalRegionsComponent } from './components/continental-regions/continental-regions.component';
import { CountryComponent } from './components/country/country.component';
import { RegionComponent } from './components/region/region.component';
import { ServiceWorkerModule } from '@angular/service-worker';

const appRoutes: Routes = [
  { path: '',
    redirectTo: '/continental',
    pathMatch: 'full',
    data: { title: 'World Bank' }
  },
  {
    path: 'continental',
    component: ContinentalRegionsComponent,
    data: { title: 'World Bank - Geografic Continental' }
  },
  {
    path: 'region/:code',
    component: RegionComponent,
    data: { title: 'World Bank - Region' }
  },
  {
    path: 'country/:id',
    component: CountryComponent,
    data: { title: 'World Bank - Country' }
  },
];

@NgModule({
  declarations: [AppComponent, ContinentalRegionsComponent, CountryComponent, RegionComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: "enabled" }),
    SharedUiModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
