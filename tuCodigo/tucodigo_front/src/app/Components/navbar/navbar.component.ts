import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';
import jwtDecode from 'jwt-decode';
import { Router } from '@angular/router';




@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

 

  constructor( public userService:UserService, public router:Router) { }

  ngOnInit(): void {
    console.log(this.userService.getDataFromToken().actualCourse);
    
  }

  isLoged():boolean  {
    return !! this.userService.loggedIn()
    }
  
  logOut() {
    return this.userService.loggedOut()
  }

  goProfile() {
    this.router.navigate([`/profile-student/${this.userService.getDataFromToken().user_id}`])
  }

  goCourse() {
    if (this.userService.getDataFromToken().actualCourse == "CSS") {
      this.router.navigate([`/css-course`])
    } 
    else if (this.userService.getDataFromToken().actualCourse == "HTML") {
      this.router.navigate(['/html-course'])
    }
    else if (this.userService.getDataFromToken().actualCourse == "JAVASCRIPT") {
      this.router.navigate(['/java-script-course'])
    } 
    

  }

  noLoged() {
    this.userService.loggedOut();
  }  
}

