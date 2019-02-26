import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { CRUDService }    from './shared/crud.service';

import { AppComponent } from './app.component';
import { CruButtonsComponent } from './cru-buttons/cru-buttons.component';

import { AppRouting } from './app.routing';
import { HomeComponent } from './home/home.component';
import { MatrimonyComponent } from './matrimony/matrimony.component';
import { HouseListingComponent } from './house-listing/house-listing.component';
import { HouseHuntingComponent } from './house-hunting/house-hunting.component';
import { JobListingComponent } from './job-listing/job-listing.component';
import { JobHuntingComponent } from './job-hunting/job-hunting.component';

@NgModule({
  declarations: [
    AppComponent,
    CruButtonsComponent,
    HomeComponent,
    MatrimonyComponent,
    HouseListingComponent,
    HouseHuntingComponent,
    JobListingComponent,
    JobHuntingComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    AppRouting
  ],
  providers: [CRUDService],
  bootstrap: [AppComponent]
})
export class AppModule { }
