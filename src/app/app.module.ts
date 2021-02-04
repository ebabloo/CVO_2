import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { MatIconModule } from '@angular/material/icon'
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { AdmindashboardComponent } from './components/admindashboard/admindashboard.component';
import { PhysiciandashboardComponent } from './components/physiciandashboard/physiciandashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EmployeesComponent } from './components/employees/employees.component';


@NgModule({
  declarations: [
    AppComponent,
    AdmindashboardComponent,
    PhysiciandashboardComponent,
    NavbarComponent,
    EmployeesComponent,
  ],  
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    BrowserAnimationsModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,

    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
