import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from './Services/user.service';
import { Router } from '@angular/router';

@Injectable()
export class JwtInterceptorInterceptor implements HttpInterceptor {

  constructor(private userService:UserService, private router: Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    /* return next.handle(request); */
    
  const tokenizeReq = request.clone({
        setHeaders: {
          authorization: `Bearer ${this.userService.getToken()}`
        }
      })
      return next.handle(tokenizeReq);  
    }
}
  

