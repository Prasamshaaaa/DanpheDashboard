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
import { CollectionDetailComponent } from './collectiondetail/collectiondetail.component';
import { FractionSummaryComponent } from './fractionsummary/fractionsummary.component';
import { RadiologyReportsComponent } from './radiologyreports/radiologyreports.component';
import { LabReportsComponent } from './labreports/labreports.component';
import { CategoryWiseIncomeReportComponent } from './categorywiseincomereport/categorywiseincomereport.component';
import { LabTestsComponent } from './labtests/labtests.component';
import { RadioTestsComponent } from './radiotests/radiotests.component';
import { AgeWiseDetailsComponent } from './age-wise-details/age-wise-details.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ApplicationWrapperComponent,
    HeaderComponent,
    SideNavComponent,
    CollectionDetailComponent,
    FractionSummaryComponent,
    RadiologyReportsComponent,
    LabReportsComponent,
    CategoryWiseIncomeReportComponent,
    LabTestsComponent,
    RadioTestsComponent,
    AgeWiseDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    RouterModule,
    MatTooltipModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
