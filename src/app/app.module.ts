import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule

import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ApplicationWrapperComponent } from './application-wrapper/application-wrapper.component';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { CollectiondetailComponent } from './collectiondetail/collectiondetail.component';
import { FractionsummaryComponent } from './fractionsummary/fractionsummary.component';
import { RadiologyreportsComponent } from './radiologyreports/radiologyreports.component';
import { LabreportsComponent } from './labreports/labreports.component';
import { CategorywiseincomereportComponent } from './categorywiseincomereport/categorywiseincomereport.component';
import { LabtestsComponent } from './labtests/labtests.component';
import { RadiotestsComponent } from './radiotests/radiotests.component';
import { AgeWiseDetailsComponent } from './age-wise-details/age-wise-details.component';
import { MatTooltipModule } from '@angular/material/tooltip';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ApplicationWrapperComponent,
    HeaderComponent,
    SideNavComponent,
    CollectiondetailComponent,
    FractionsummaryComponent,
    RadiologyreportsComponent,
    LabreportsComponent,
    CategorywiseincomereportComponent,
    LabtestsComponent,
    RadiotestsComponent,
    AgeWiseDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    RouterModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
