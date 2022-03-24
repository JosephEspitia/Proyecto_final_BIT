import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/Services/user.service';
import { User } from 'src/app/Models/user.model';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor(public userService: UserService, public router: Router) {}

  ngOnInit(): void {}

  registerUser(form: NgForm) {
    const { name, lastName, email, password, passwordConfirm } = form.value;
    if (!name || !lastName || !email || !password || !passwordConfirm) {
      return Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'No puedes dejar campos vacios',
        confirmButtonColor: '#ffc107'
      });
    }

    if (password !== passwordConfirm) {
      Swal.fire({
        position: 'center',
        icon: 'error',
        text: 'Las contraseñas no coinciden',
        showConfirmButton: true,
        confirmButtonColor: '#ffc107'
      });

      this.userService.selectedUser.password = ""
      this.userService.selectedUser.passwordConfirm = ""
      return
    }

    this.userService.postUser(form.value).subscribe((res) => {
      Swal.fire({
        position: 'center',
        icon: 'success',
        text: 'Usuario creado correctamente',
        showConfirmButton: true,
        confirmButtonColor: '#ffc107'
      });
      this.userService.selectedUser.name = '';
      this.userService.selectedUser.lastName = '';
      this.userService.selectedUser.email = '';
      this.userService.selectedUser.password = '';
      this.userService.selectedUser.passwordConfirm = '';
    });

    this.router.navigate([`/login`])
    return;
  }
}
