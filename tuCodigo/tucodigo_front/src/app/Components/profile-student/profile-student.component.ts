import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-profile-student',
  templateUrl: './profile-student.component.html',
  styleUrls: ['./profile-student.component.css']
})
export class ProfileStudentComponent implements OnInit {

  constructor(public userService: UserService) { }

  ngOnInit(): void {
    /* this.getUsers() */
  }
/* getUsers() {
  this.userService.getUsers().subscribe(
    (data) => {this.userService.user}
  )
} */
}
