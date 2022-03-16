import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Contact } from 'src/app/Models/contacts.model';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { ContactService } from 'src/app/Services/contact.service';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(public contactService: ContactService, public router: Router) { }

  ngOnInit(): void {
  }

  createRequest(form:NgForm) {
    const {contactName, contactEmail, contactPhone, contactContent} = form.value;
        if (!contactName || !contactEmail || !contactPhone || !contactContent) {
          return Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'No puedes dejar campos vacios',
            confirmButtonColor: '#ffc107'
          });
    }

    this.contactService.postContact(form.value). subscribe((res)=> {
      Swal.fire({
        position: 'center',
        icon: 'success',
        text: 'Su petición ha sido envíada exitosamente',
        showConfirmButton: true,
        confirmButtonColor: '#ffc107'
      });
      this.contactService.selectedContact.contactName = '';
      this.contactService.selectedContact.contactEmail = '';
      this.contactService.selectedContact.contactPhone = 0;
      this.contactService.selectedContact.contactContent = '';
    })
    return
  }

  cleanForm(form:NgForm) {
    form.reset()
}
}
