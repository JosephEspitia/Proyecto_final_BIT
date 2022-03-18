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

 
  constructor(public userService: UserService, public router: Router) {}
  ngOnInit(): void {
   
    
   
  }

  login(form: NgForm) {
  
      
      this.userService.login(form.value).subscribe( {
        next: (res:any)=>{
          localStorage.setItem('token', res.token);
        },
        error: (error:any)=> {
          Swal.fire({
            icon: 'error',
            title: 'Lo sentimos',
            text: 'El usuario solicitado no se ha encontrado, verifique que las credenciales estan escritas sean correctas',
            confirmButtonColor: '#ffc107'
          });
        },
      complete: () => {
        console.log('complete');
        this.router.navigate([`/home`]);
      },
      }
       /*  (res: any) => {
         
            localStorage.setItem('token', res.token); */
           /*  this.router.navigate(['/home']); */
        
       /*  },
        (err) => {
          Swal.fire({
            icon: 'error',
            title: 'Lo sentimos',
            text: 'El usuario solicitado no se ha encontrado, verifique que las credenciales estan escritas sean correctas',
            confirmButtonColor: '#ffc107'
          });
        } */
      );
   
  }
  

 

}
