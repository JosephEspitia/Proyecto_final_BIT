import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/Services/couses.service';

@Component({
  selector: 'app-html-course',
  templateUrl: './html-course.component.html',
  styleUrls: ['./html-course.component.css']
})
export class HtmlCourseComponent implements OnInit {
  link = 0;
  cursoActive = false;
  numeroCurso = 0;

  constructor(public courseService: CourseService) { }

  ngOnInit(): void {
  }
  CursoActive() {
    this.cursoActive = true;
    this.numeroCurso = 1;
    return this.cursoActive;
  }

}
