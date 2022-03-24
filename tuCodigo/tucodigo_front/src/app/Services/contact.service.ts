import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Contact } from "../Models/contacts.model";
import { environment } from "src/environments/environment";
import { Router } from "@angular/router";


@Injectable({
    providedIn: 'root',
})
export class ContactService {

    selectedContact: Contact;
    contactsList: Contact[];
    url_api = `${environment.API_URL}/contacts`;

    constructor(private http: HttpClient, private router: Router) {
        this.selectedContact= new Contact(), this.contactsList = []
    }

    postContact(formContact:Contact) {
        return this.http.post(`${this.url_api}/create-request`, formContact);
 }

     putContact(_id:any, newElm:any) {
    return this.http.put(`${this.url_api}/upDate-request/${_id}`, newElm)
     }

     deleteContact(_id: any) {
        return this.http.delete(`${this.url_api}/delete-request/${_id}`);
      }

    getContact() {
        return this.http.get(`${this.url_api}/get-request`);
    }

    getOneContact(_id:any) {
        return this.http.get(`${this.url_api}/get-one-request/${_id}`)
    }



}

