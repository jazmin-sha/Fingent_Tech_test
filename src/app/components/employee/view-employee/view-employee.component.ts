import { Tasks } from './../../../class/task';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { TaskService } from './../../../services/task.service';

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
  task = new Tasks();

  constructor(
    public route: ActivatedRoute,
    public taskService: TaskService,
    public router: Router
  ) {
    this.UserId = this.route.snapshot.paramMap.get('UserId')
  }


  ngOnInit(): void {
    this.getTask()
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

  displayStyle = "none";

  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }

  AddTask() {
    this.task.completed = false;
    this.taskService.AddTask(this.task, this.UserId).subscribe(data => {
      console.log('added');
      alert("task added.")
      this.getTask();
      this.closePopup();
    })
  }

  goBack() {
    this.router.navigate(['employee/employee-list'])
  }
}