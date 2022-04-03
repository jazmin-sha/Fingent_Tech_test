import { User } from 'src/app/class/user';
import { Tasks } from 'src/app/class/task';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  constructor(public http: HttpClient) { }

  serviceUrl = 'https://jsonplaceholder.typicode.com/users';


  GetOneEmployeeTask(id: any) {
    let headers = new HttpHeaders();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    let options = { headers: headers };
    return this.http.get(`${this.serviceUrl}/${id}/todos`, options).pipe<any>(map(res => res));
  }

  // AddTask(task: Tasks, id: any) {
  //   let headers = new HttpHeaders();
  //   headers.append('Accept', 'application/json');
  //   headers.append('Content-Type', 'application/json');
  //   let options = { headers: headers };
  //   return this.http
  //     .post(`${this.serviceUrl}/${id}/todos`, task, options)
  //     .pipe<any>(map((res) => res));
  // }



}
