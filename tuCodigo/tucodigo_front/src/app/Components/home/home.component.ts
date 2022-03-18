import { Component, OnInit } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  token:any = this.userService.getToken();
  decode:any = jwtDecode(this.token);
  constructor(public router:Router, public userService: UserService) { }

  ngOnInit(): void {
    
  }
  
  goProfile() {
    this.router.navigate([`/profile-student/${this.decode.user_id}`])
  }

}
