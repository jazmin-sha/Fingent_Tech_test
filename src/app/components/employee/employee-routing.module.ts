import { AuthGuard } from './../../guard/auth.guard';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'employee-list',
    component: EmployeeListComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'view-employee',
    component: ViewEmployeeComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
