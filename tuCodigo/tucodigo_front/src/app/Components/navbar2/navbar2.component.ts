import { Component, OnInit } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-navbar2',
  templateUrl: './navbar2.component.html',
  styleUrls: ['./navbar2.component.css']
})
export class Navbar2Component implements OnInit {

  constructor(public userService: UserService) { }

  ngOnInit(): void {
  }

}


