import { Router } from '@angular/router';
import { LoginService } from './../../../services/login.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/class/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  user = new User()

  constructor(
    public userService: LoginService,
    public router: Router
  ) { }

  ngOnInit(): void {
  }

  returnData: any;

  userLogin() {
    this.returnData = this.userService.UserLogin(this.user.Username, this.user.Password)
    console.log(this.returnData);
    if (this.returnData === true) {
      localStorage.setItem('userDetails', JSON.stringify({ userName: 'fingent', isLoggined: true }));
      this.router.navigate(['employee/employee-list'])
    } else if (this.returnData === 'Invalid UserName..!') {
      alert('Invalid UserName')
    } else if (this.returnData === 'Invalid Password') {
      alert('Invalid Password')
    } else if (this.returnData === false) {
      alert('Enter Mandatory Fields')
    }

  }

}
