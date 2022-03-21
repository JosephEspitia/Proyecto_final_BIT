import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Curses } from 'src/app/Models/courses.model';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  selectCurses: Curses;

  constructor(public http: HttpClient) {
    this.selectCurses = new Curses();
  }

  getEjercise() {
    /*   return this.http.get('http://localhost:3000/api/products/get-curses') */
    return this.http.get('http://localhost:3000/api/courses/get-curses');
  }
  getOneEjercice(num: number) {
    /* return this.http.get(`http://localhost:3000/api/products/get-curse/${num}`) */
    return this.http.get(`http://localhost:3000/api/courses/get-curse/${num}`);
  }
}
