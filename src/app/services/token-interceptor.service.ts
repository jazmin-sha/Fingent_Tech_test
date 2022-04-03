import { LoginService } from './login.service';
import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService {

  constructor(
    private injector: Injector,
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let authService = this.injector.get(LoginService)
    let tokenizedReq = req.clone({
      setHeaders: {
        'Content-Type': 'application/json; charset=utf-8',
        'Accept': 'application/json',
        'Authorization': `Bearer ${authService.gettoken()}`,
      }
    })
    return next.handle(tokenizedReq)
  }

}
