import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';
import { ContactService } from 'src/app/Services/contact.service';
import { ForumService } from 'src/app/Services/forum.service';
import Swal from 'sweetalert2';
import { User } from 'src/app/Models/user.model';
import { Contact } from 'src/app/Models/contacts.model';
import { Forum } from 'src/app/Models/forum.model';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-profile-admin',
  templateUrl: './profile-admin.component.html',
  styleUrls: ['./profile-admin.component.css'],
})
export class ProfileAdminComponent implements OnInit {
  //solicitud de aparición de tablas
  showTable: boolean = false;
  showSolicitud: boolean = false;
  showCourses: boolean = false;
  showforum: boolean = false;

  //solicitud de popup

  openUp: boolean = false;
  showSolicitudUp: boolean = false;
  showCoursesUp: boolean = false;
  showforumUp: boolean = false;

  constructor(
    public userService: UserService,
    public contactService: ContactService,
    public forumService: ForumService,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.getUsuar();
    this.getContact();
    this.getForum()
  }
  //funciones hacia el back de usuarios

  getUsuar() {
    this.userService.getUsers().subscribe((res) => {
      this.userService.userLists = res as User[];
    });
  }

  deleteUser(_id: string) {
    Swal.fire({
      title: '¿Estas seguro de eliminar el producto?',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'Sí',
      confirmButtonColor: '#ffc107',
      denyButtonText: `No`,
      denyButtonColor: '#ffc107',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('Usuario eliminado exitosamente!', '', 'success');
        this.userService.deleteUser(_id).subscribe((res) => {
          this.getUsuar();
        });
      } else if (result.isDenied) {
        Swal.fire('Los cambios no han sido guardado', '', 'info');
      }
    });
  }

  upDateUser(element: any) {
    this.openUp = true;
    this.userService.selectedUser = element;
    console.log(element);

    return;
  }

  addUser(_id: any, form: NgForm) {
    console.log(form.value);
    Swal.fire({
      title: '¿Estas seguro desea actualizar el usuario?',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'Sí',
      confirmButtonColor: '#ffc107',
      denyButtonText: `No`,
      denyButtonColor: '#ffc107',
    }).then((result) => {
      if (result.isConfirmed) {
        this.userService.putUser(_id, form.value).subscribe({
          next: (res: any) => {
            Swal.fire({
              title: 'El usuario ha sido actualizado actualizado',
              confirmButtonColor: '#ffc107',
            });
            this.getUsuar();
            this.resetForm();
          },
          error: (err: any) => {
            console.log(err);
          },
          complete: () => {
            console.log('complete');
          },
        });
      } else if (result.isDenied) {
        Swal.fire('Los cambios no han sido guardado', '', 'info');
      }
    });
  }

  //solicitudes de vistas de tablas
  showTablef() {
    return this.showTable == false
      ? ((this.showTable = true), this.closeOthers())
      : (this.showTable = false);
  }
  showSolicitudf() {
    return this.showSolicitud == false
      ? ((this.showSolicitud = true), this.closeOthers3())
      : (this.showSolicitud = false);
  }
  showCoursesf() {
    return this.showCourses == false
      ? ((this.showCourses = true), this.closeOthers2())
      : (this.showCourses = false);
  }
  showForumf() {
    return this.showforum == false
      ? ((this.showforum = true), this.closeOthers4())
      : (this.showforum = false);
  }

  //solicitudes de vista de popUps
  resetForm() {
    return (this.openUp = false);
  }
  showSolicitudUpFun() {
    /* return this.showSolicitudUp == false
      /* ? (this.showSolicitudUp = true, this.userService.selectedUser= element) */
    /* : (this.showSolicitudUp = false); */
    return (this.showSolicitudUp = false);
  }
  upDateContact(element: any) {
    this.showSolicitudUp = true;
    this.contactService.selectedContact = element;
    /* console.log(element); */

    return;
  }

  showCoursesUpFun() {
    return this.showCoursesUp == false
      ? (this.showCoursesUp = true)
      : (this.showCoursesUp = false);
  }
  showforumUpFun() {
    /* return this.showforumUp == false */
    /*   ? (this.showforumUp = true) */
      /* : (this.showforumUp = false); */
      return this.showforumUp = false
  }
  upDateForum(element: any) {
    this.showforumUp = true;
    this.forumService.selectedForum = element;
    /* console.log(element); */

    return;
  }

  closeOthers() {
    if (this.showTable == true) {
      this.showCourses = false;
      this.showSolicitud = false;
      this.showforum = false;
    }
  }
  closeOthers2() {
    if (this.showCourses == true) {
      this.showTable = false;
      this.showSolicitud = false;
      this.showforum = false;
    }
  }

  closeOthers3() {
    if (this.showSolicitud == true) {
      this.showforum = false;
      this.showTable = false;
      this.showCourses = false;
    }
  }

  closeOthers4() {
    if (this.showforum == true) {
      this.showTable = false;
      this.showCourses = false;
      this.showSolicitud = false;
    }
  }

  //funciones del cotactServices

  getContact() {
    this.contactService.getContact().subscribe((res) => {
      this.contactService.contactsList = res as Contact[];
    });
  }

  deleteContact(_id: any) {
    /* console.log(_id) */
  
      Swal.fire({
        title: '¿Estas seguro de eliminar la solicitud?',
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: 'Sí',
        confirmButtonColor: '#ffc107',
        denyButtonText: `No`,
        denyButtonColor: '#ffc107',
      }).then((result) => {
        if (result.isConfirmed) {
          this.contactService.deleteContact(_id).subscribe((res) => {
            Swal.fire('Solicitud eliminada correctamente', '', 'success');
            this.getContact();
          });
        } else if (result.isDenied) {
          Swal.fire('Los cambios no han sido guardado', '', 'info');
        }
      });
    
  }

  ansContact(_id: any, form: NgForm) {
  
    this.contactService.putContact(_id, form.value).subscribe({
      next: (res: any) => {
        Swal.fire({
          title: 'El mensaje ha sido Envíado',
          confirmButtonColor: '#ffc107',
        });
        this.getContact();
      },
      error: (error: any) => {
        console.log(error);
      },
      complete: () => {
        console.log('complete');
        this.showSolicitudUpFun()
      },
    });
  }

  //funciones forumServices
  getForum() {
    this.forumService.getForum().subscribe((res) => {
      this.forumService.forums = res as Forum[];
    });
  }
  editForum(_id:any, form:NgForm) {
    Swal.fire({
      title: '¿Estas seguro de actualizar los elementos seleccionados?',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'Sí',
      confirmButtonColor: '#ffc107',
      denyButtonText: `No`,
      denyButtonColor: '#ffc107',
    }).then((result) => {
      if (result.isConfirmed) {
        this.forumService.updateForum(_id, form.value).subscribe({
          next: (res: any) => {
            Swal.fire({
              title: 'Los elementos han sido actualizado',
              confirmButtonColor: '#ffc107',
            });
            this.getForum();
            this.showforumUpFun()
          },
          error: (err: any) => {
            console.log(err);
          },
          complete: () => {
            console.log('complete');
          },
        });
      } else if (result.isDenied) {
        Swal.fire('Los cambios no han sido guardado', '', 'info');
      }
    });
  }

  deleteForum(_id:any) {
    Swal.fire({
      title: '¿Estas seguro de eliminar la pregunta seleccionada?',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'Sí',
      confirmButtonColor: '#ffc107',
      denyButtonText: `No`,
      denyButtonColor: '#ffc107',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Pregunta eliminado exitosamente!', '', 'success');
        this.forumService.deleteForum(_id).subscribe((res) => {
          this.getForum();
        });
      } else if (result.isDenied) {
        Swal.fire('Los cambios no han sido guardado', '', 'info');
      }
    });
  }

}
