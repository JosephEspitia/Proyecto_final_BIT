import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';
import { User } from 'src/app/Models/user.model';
import jwtDecode from 'jwt-decode';
import { Router } from '@angular/router';



@Component({
  selector: 'app-profile-student',
  templateUrl: './profile-student.component.html',
  styleUrls: ['./profile-student.component.css']
})
export class ProfileStudentComponent implements OnInit {
  idStudent : string
  /* token:any = this.userService.getToken();
  detoken:any = jwtDecode(this.token) */

  constructor(public userService: UserService, public router:Router) { 
    this.idStudent = ``
     
    
   
  }

  ngOnInit(): void {
    this.getUsers()
    this.idStudent = window.location.pathname.split(`/`)[2]    
    console.log(this.idStudent)

    
    
  /* this.router.navigate([`/profile-student${this.detoken._id}`]) */
  
   
  }

  getUsers() {
    this.userService.getUsers().subscribe((res) => {
      this.userService.userLists = res as User[];
      console.log(this.userService.userLists)
    });
  }
}


