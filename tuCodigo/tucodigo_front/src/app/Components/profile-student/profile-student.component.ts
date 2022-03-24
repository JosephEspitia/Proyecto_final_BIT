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
  

  constructor(public userService: UserService, public router:Router) { 
    this.idStudent = ``
     
    this.very()
   
  }

  ngOnInit(): void {
    
    this.idStudent = window.location.pathname.split(`/`)[2]    
    console.log(this.idStudent)
    this.getOneUser(this.idStudent)
    
  }

  getUsers() {
    this.userService.getUsers().subscribe((res) => {
      this.userService.userLists = res as User[];
      /* console.log(this.userService.userLists) */
    });
  }

  getOneUser(id: string) {
    this.userService.getOneUser(this.idStudent).subscribe((res) => {
      this.userService.selectedUser = res as User;
      console.log(res);
    })
  } 
  
 
 very() {
   if (window.location.pathname.split(`/`)[2] != this.userService.getDataFromToken().user_id) {
      this.router.navigate(['/not-found'])
   }
 }
 
}

