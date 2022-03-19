import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './Services/user.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private userService:UserService,
    private router: Router
  ) {}


  canActivate():boolean {
    if (this.userService.loggedIn()) {
      return true
    }
    this.router.navigate(['/login'])
    return false
  }
  
}
