import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { UserService } from './user.service';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor(private userService:UserService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    /* const headers = new HttpHeaders */

    const reqClone = req.clone({
      setHeaders: {
        Authorization: `Bearer ${this.userService.getToken()}`
      }
    })
    return next.handle(reqClone)/* .pipe(catchError(this.errorWay)); */

  


  }
/* errorWay(error: HttpErrorResponse){
  console.log("Sucedió un error");
  console.log("Registrado en log file");
  console.warn(error);
  
} */
  
}
/* const tokenReq= req.clone({
  setHeaders: {
    Authorization: `Bearer  ${this.userService.getToken()}`
  }
})
return next.handle(tokenReq); */