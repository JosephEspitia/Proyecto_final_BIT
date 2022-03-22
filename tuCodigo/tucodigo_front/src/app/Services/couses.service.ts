import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Curses } from 'src/app/Models/courses.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  selectCurses: Curses;
  url_api = `${environment.API_URL}/courses`;

  constructor(public http: HttpClient) {
    this.selectCurses = new Curses();
  }

  getEjercise() {
    /*   return this.http.get('http://localhost:3000/api/products/get-curses') */
   /*  return this.http.get('http://localhost:3000/api/courses/get-curses'); */
   return this.http.get(`${this.url_api}/get-curses`)
  }
  getOneEjercice(num: number) {
    /* return this.http.get(`http://localhost:3000/api/products/get-curse/${num}`) */
   /*  return this.http.get(`http://localhost:3000/api/courses/get-curse/${num}`); */
   return this.http.get(`${this.url_api}/get-curse/${num}`)
  }
}
