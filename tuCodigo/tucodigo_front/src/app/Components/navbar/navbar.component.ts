import { Component, OnInit } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { UserService } from 'src/app/Services/user.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public userService: UserService) { }

  ngOnInit(): void {
  }

}
