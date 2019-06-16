import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CruButtonsComponent } from './cru-buttons/cru-buttons.component';
import { MatrimonyComponent } from './matrimony/matrimony.component';
import { HouseListingComponent } from './house-listing/house-listing.component';
import { HouseHuntingComponent } from './house-hunting/house-hunting.component';
import { JobListingComponent } from './job-listing/job-listing.component';
import { JobHuntingComponent } from './job-hunting/job-hunting.component';

export const routes: Routes = [
  { path: 'matrimony', component: MatrimonyComponent, pathMatch: 'full' },
  { path: 'house_listing', component: HouseListingComponent, pathMatch: 'full' },
  { path: 'house_hunting', component: HouseHuntingComponent, pathMatch: 'full' },
  { path: 'job_listing', component: JobListingComponent, pathMatch: 'full' },
  { path: 'job_hunting', component: JobHuntingComponent, pathMatch: 'full' },
  { path: 'cru-buttons', component: CruButtonsComponent, pathMatch: 'full' },
  { path: 'home', component: HomeComponent, pathMatch: 'full' },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [
    RouterModule
  ]
})

export class AppRouting {
}
