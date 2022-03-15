import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';
import { User } from 'src/app/Models/user.model';

@Component({
  selector: 'app-profile-student',
  templateUrl: './profile-student.component.html',
  styleUrls: ['./profile-student.component.css']
})
export class ProfileStudentComponent implements OnInit {

  constructor(public userService: UserService) { }

  ngOnInit(): void {
  this.getUsers()
  }

  getUsers() {
    this.userService.getUsers().subscribe((res) => {
      this.userService.userLists = res as User[];
    });
  }
}
