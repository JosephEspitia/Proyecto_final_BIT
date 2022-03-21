import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Curses } from 'src/app/Models/courses.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  selectCurses:Curses

  constructor(public http : HttpClient) {
    this.selectCurses= new Curses
   }

  getEjercise (){
    return this.http.get('http://localhost:5000/api/products/get-curses')
  }
  getOneEjercice (num:number){
    return this.http.get(`http://localhost:5000/api/products/get-curse/${num}`)
  }




}
