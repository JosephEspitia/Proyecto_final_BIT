import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../Models/user.model';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  selectedUser: User;
  userLists: User[];
  url_api = `${environment.API_URL}/user`;

  constructor(private http: HttpClient, private router:Router) {
    (this.selectedUser = new User()), (this.userLists = []);
  }

  getUsers() {
    return this.http.get(`${this.url_api}/get-user`);
  }

  getOneUser(_id: any) {
    return this.http.get(`${this.url_api}/get-one-user/${_id}`);
  }

  postUser(formUser: User) {
    return this.http.post(`${this.url_api}/create-user`, formUser);
  }

  putUser(_id: any, newElm: any) {
    return this.http.post(`${this.url_api}/update-user/${_id}`, newElm);
  }

  deleteUser(_id: any) {
    return this.http.delete(`${this.url_api}/delete-user/${_id}`);
  }

//login and token elements

    login(credentials:any) {
        return this.http.post(`${this.url_api}/login`, credentials)
    }
    
    loggedIn() {
        return localStorage.getItem('token') ? true: false
    }

    loggedOut() {
        localStorage.removeItem('token')
        this.router.navigate(['/login'])
    }

    adminUser() {
        const { permissions } = this.getDataFromToken()
    }
    
    getToken() {
        return localStorage.getItem('token')
    }
    
    getDataFromToken() :any {
        const token = this.getToken()
        const decoded = jwtDecode(token ? token : "Error in token")
        return decoded
      }
}
