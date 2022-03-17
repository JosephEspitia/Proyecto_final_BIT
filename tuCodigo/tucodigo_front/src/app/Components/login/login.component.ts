import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';
import { User } from 'src/app/Models/user.model';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import jwtDecode from 'jwt-decode';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  token:any = this.userService.getToken();
  detoken:any = jwtDecode(this.token)

  constructor(public userService: UserService, public router: Router) {}
  ngOnInit(): void {
   console.log(this.detoken);
   
   
   
  }

  login(form: NgForm) {
    try {
      
      this.userService.login(form.value).subscribe(
        (res: any) => {
         
            localStorage.setItem('token', res.token);
           /*  this.router.navigate(['/home']); */
        
        },
        (err) => {
          Swal.fire({
            icon: 'error',
            title: 'Lo sentimos',
            text: 'El usuario solicitado no se ha encontrado, verifique que las credenciales estan escritas sean correctas',
            confirmButtonColor: '#ffc107'
          });
        }
      );
    } catch (error) {
      alert(error);
      return;
    }
  }
  

 

}
