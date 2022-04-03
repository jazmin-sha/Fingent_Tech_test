import { LoginService } from './../../../services/login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  EmployeeList: any;
  searchString: string = '';

  constructor(
    public employeeService: EmployeeService,
    public router: Router,
    public loginService: LoginService
  ) { }

  ngOnInit(): void {
    this.getAllEmployees()
  }

  getAllEmployees() {
    this.employeeService.GetAllEmployees().subscribe((data: any) => {
      this.EmployeeList = data;
      console.log(this.EmployeeList);
    })
  }

  //  pagination control..............
  page = 1;
  count = 0;
  listSize = 4;
  pageSizes = [6, 10, 20];
  pageSize = 6;

  onListDataChange(event: any) {
    this.page = event;
  }

  // show page entries..................
  handlePageSizeChange(event: any): void {
    this.pageSize = event.target.value;
    this.page = 1;
    this.getAllEmployees();

  }

  goToTaskPage(id: number) {
    this.router.navigate(['employee/view-employee', { UserId: id }]);
  }

  logout() {
    this.loginService.removeToken()
  }

}
