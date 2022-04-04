import { Router } from '@angular/router';
import { LoginService } from './../../../services/login.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/class/user';
import Swal from 'sweetalert2';

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
      Swal.fire({
        text: 'Invalid UserName...!!',
        timer: 1500,
        showCancelButton: false,
        showConfirmButton: false
      }).then(
        function () { },
        function (dismiss) {
          if (dismiss === 'timer') { }
        }
      );
    } else if (this.returnData === 'Invalid Password') {
      Swal.fire({
        text: 'Invalid Password...!!',
        timer: 1500,
        showCancelButton: false,
        showConfirmButton: false
      }).then(
        function () { },
        function (dismiss) {
          if (dismiss === 'timer') { }
        }
      );
    } else if (this.returnData === false) {
      Swal.fire({
        text: 'Enter Mandatory Fields...!!',
        timer: 1500,
        showCancelButton: false,
        showConfirmButton: false
      }).then(
        function () { },
        function (dismiss) {
          if (dismiss === 'timer') { }
        }
      );
    }

  }

}
