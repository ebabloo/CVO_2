import { FullComponent } from './layouts/full/full.component';
import { LandingComponent } from './layouts/landing/landing.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdmindashboardComponent } from "./components/admindashboard/admindashboard.component"
import { EmployeesComponent } from './components/employees/employees.component';
import { ManagecredentialsComponent } from './components/managecredentials/managecredentials.component';
import { PhysiciandashboardComponent } from "./components/physiciandashboard/physiciandashboard.component"

const routes: Routes = [
  {
    path: "",
    component: LandingComponent,
    children: [
      { path: "", redirectTo: "login", pathMatch: "full" },
      { path: "login", component: LoginComponent },
      { path: "sign-up", component: SignupComponent }
    ]
  },
  {
    path: "",
    component: FullComponent,
    children: [
      { path: "", redirectTo: "physician", pathMatch: "full" },
      { path: "physician", component: PhysiciandashboardComponent },
      { path: "admin", component: AdmindashboardComponent },
      { path: "employees", component: EmployeesComponent },
      { 
        path: "managecredentials",
        loadChildren: "../app/components/managecredentials/managecredentials.module#ManagecredentialsModule"
       }
    ]

  },
  // { path: "login", component: LoginComponent },
  // { path: "sign-up", component: SignupComponent },
  // { path: "physician", component: PhysiciandashboardComponent },
  // { path: "admin", component: AdmindashboardComponent },
  // { path: "employees", component: EmployeesComponent },
  // {
  //   path: "managecredentials",
  //   component: ManagecredentialsComponent,
  //   children: [
  //     { path: 'pensonalInfo', redirectTo: 'pensonalInfo', pathMatch: 'full' },
  //     { path: 'pensonalInfo', component: PersonalInformationComponent },
  //   ]
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
