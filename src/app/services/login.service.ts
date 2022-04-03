import { Router } from '@angular/router';
import { User } from 'src/app/class/user';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  user = new User()

  constructor(
    public router: Router
  ) {
  }

  name: string = 'fingent'
  password: string = 'fingent'

  UserLogin(userName: any, userPassword: any) {
    if (userName === this.name && userPassword === this.password) {
      return true;
    } else if (userName !== this.name) {
      return 'Invalid UserName..!'
    } else if (userPassword !== this.password) {
      return 'Invalid Password'
    } else {
      return false
    }
  }


  gettoken() {
    return !!localStorage.getItem("userDetails");
  }

  removeToken() {
    localStorage.removeItem("userDetails")
    this.router.navigate(['auth/login'])
  }


}
