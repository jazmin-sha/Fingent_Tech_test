import { LoginService } from './../../../services/login.service';
import { Tasks } from './../../../class/task';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { TaskService } from './../../../services/task.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.scss']
})
export class ViewEmployeeComponent implements OnInit {

  UserId: any;
  TaskList: any;
  TaskListFilter: Tasks[] = [];
  TaskCount: any;
  searchString: string = '';
  Filterbyvalue: any;
  public addTaskForm: FormGroup = Object.create(null);
  myJson: any;
  displayStyle = "none";

  constructor(
    public route: ActivatedRoute,
    public taskService: TaskService,
    public router: Router,
    public loginService: LoginService
  ) {
    this.UserId = this.route.snapshot.paramMap.get('UserId')
  }


  ngOnInit(): void {
    this.getTask();
    this.addForm();
  }

  getTask() {
    this.taskService.GetOneEmployeeTask(this.UserId).subscribe((data: any) => {
      this.TaskList = <Array<any>>data;
      this.TaskListFilter = this.TaskList;
      this.TaskCount = this.TaskList.length;
      console.log(this.TaskList);
    })
  }

  Filterbyuser() {
    if (this.Filterbyvalue == 3) {
      this.TaskListFilter = this.TaskList;
    } else if (this.Filterbyvalue == 2) {
      this.TaskListFilter = this.TaskList.filter((x: any) => x.completed == true)
    } else {
      this.TaskListFilter = this.TaskList.filter((x: any) => x.completed == false)
    }
  }


  openPopup() {
    this.displayStyle = "block";
  }

  closePopup() {
    this.displayStyle = "none";
    this.addTaskForm.reset();
  }


  addForm() {
    this.addTaskForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
    });
  }

  AddTask() {
    this.myJson = {
      'title': this.addTaskForm.value.title,
      'completed': false,
      'userId': this.UserId
    }
    this.TaskList.unshift(this.myJson);
    alert("task added.");
    this.closePopup();
  }

  goBack() {
    this.router.navigate(['employee/employee-list'])
  }

  logout() {
    this.loginService.removeToken()
  }

}

