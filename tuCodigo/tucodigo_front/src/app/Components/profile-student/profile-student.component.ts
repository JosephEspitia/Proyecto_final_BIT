import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';
import { User } from 'src/app/Models/user.model';




@Component({
  selector: 'app-profile-student',
  templateUrl: './profile-student.component.html',
  styleUrls: ['./profile-student.component.css']
})
export class ProfileStudentComponent implements OnInit {
  idStudent : string

  constructor(public userService: UserService) { 
    this.idStudent = ``
  }

  ngOnInit(): void {
    this.getUsers()
    this.idStudent = window.location.pathname.split(`/`)[2]    
    console.log(this.idStudent)
  
   
  }

  getUsers() {
    this.userService.getUsers().subscribe((res) => {
      this.userService.userLists = res as User[];
    });
  }
}


