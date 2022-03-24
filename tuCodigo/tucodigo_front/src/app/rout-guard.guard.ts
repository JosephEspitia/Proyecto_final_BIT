import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './Services/user.service';

@Injectable({
  providedIn: 'root'
})
export class RoutGuardGuard implements CanActivate {
  
  constructor(
    private userService:UserService,
    private router: Router
  ) {}


  canActivate():boolean {
    if (!this.userService.loggedIn()) {
      return true
    }
    this.router.navigate(['/not-fount'])
    return false
  }
  
}
