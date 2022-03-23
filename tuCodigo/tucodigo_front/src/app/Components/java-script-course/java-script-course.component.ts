import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/Services/couses.service';
@Component({
  selector: 'app-java-script-course',
  templateUrl: './java-script-course.component.html',
  styleUrls: ['./java-script-course.component.css']
})
export class JavaScriptCourseComponent implements OnInit {
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