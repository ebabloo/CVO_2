import { ManagecredentialsModule } from './components/managecredentials/managecredentials.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { AdmindashboardComponent } from './components/admindashboard/admindashboard.component';
import { PhysiciandashboardComponent } from './components/physiciandashboard/physiciandashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

import { PersonalInformationComponent } from './components/personal-information/personal-information.component';


import { LandingComponent } from './layouts/landing/landing.component';
import { FullComponent } from './layouts/full/full.component';
import { CustomMaterialModule } from './material';
@NgModule({
  declarations: [
    AppComponent,
    AdmindashboardComponent,
    PhysiciandashboardComponent,
    NavbarComponent,
    EmployeesComponent,
    LoginComponent,
    SignupComponent,
    PersonalInformationComponent,
    LandingComponent,
    FullComponent
  ],  
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ManagecredentialsModule,
    CustomMaterialModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,

    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
