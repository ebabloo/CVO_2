import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdmindashboardComponent } from "./components/admindashboard/admindashboard.component"
import { EmployeesComponent } from './components/employees/employees.component';
import { PhysiciandashboardComponent } from "./components/physiciandashboard/physiciandashboard.component"

const routes: Routes = [
  { path: "", component: PhysiciandashboardComponent },
  { path: "physician", component: PhysiciandashboardComponent },
  { path: "admin", component: AdmindashboardComponent },
  { path: "employees", component: EmployeesComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
