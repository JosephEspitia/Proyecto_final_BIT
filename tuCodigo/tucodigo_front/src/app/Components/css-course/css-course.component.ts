import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

import { CourseService } from 'src/app/Services/couses.service';

@Component({
  selector: 'app-css-course',
  templateUrl: './css-course.component.html',
  styleUrls: ['./css-course.component.css'],
})
export class CssCourseComponent implements OnInit {
  constructor(public router: Router, public courseService: CourseService) {}

  link = 0;
  cursoActive = false;
  numeroCurso = 0;

  ngOnInit(): void {
    this.link = 1;
    /* this.cursoActive = true; */
  }
  curso(num: number) {
    this.link = num;
    return this.link;
    /* this.link=num

    if (this.link===10){
     this.link10=true
    } */
  }

  CursoActive() {
    this.cursoActive = true;
    this.numeroCurso = 1;
    return this.cursoActive;
  }

  comprobar(form: NgForm) {
    const { consola } = form.value;

    this.courseService
      .getOneEjercice(this.numeroCurso)
      .subscribe((res: any) => {
        const curso = res.curses[0].ejercise;

        if (consola == curso) {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Ejercicio realizado con exito!',
            showConfirmButton: false,
            timer: 3000,
          });

          this.numeroCurso++;
          this.courseService.selectCurses.ejercise = '';
        } else if (this.numeroCurso >= 6) {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Haz Culminado el Curso Con exito!',
            showConfirmButton: false,
            timer: 3000,
          });
          this.numeroCurso = 0;
        } else {
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Ejercicio no aprovado, verificar Estructura',
            text: '.nombre { metodo: argumento } ;',
            showConfirmButton: true,

            /*  timer: 3000, */
          });
        }
      });
  }
}
