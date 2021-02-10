import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdmindashboardComponent } from "./components/admindashboard/admindashboard.component"
import { EmployeesComponent } from './components/employees/employees.component';
import { ManagecredentialsComponent } from './components/managecredentials/managecredentials.component';
import { PhysiciandashboardComponent } from "./components/physiciandashboard/physiciandashboard.component"

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "login", component: LoginComponent },
  { path: "sign-up", component: SignupComponent},
  { path: "physician", component: PhysiciandashboardComponent },
  { path: "admin", component: AdmindashboardComponent },
  { path: "employees", component: EmployeesComponent },
  { path: "managecredentials", component: ManagecredentialsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
