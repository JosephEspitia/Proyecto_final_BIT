import { Component, LOCALE_ID, OnInit } from '@angular/core';
import { ForumService } from 'src/app/Services/forum.service';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {

  constructor(public forumService: ForumService, public router: Router) { }

  ngOnInit(): void {
    this.getForum()
   }

  getForum(){
    this.forumService.getForum().subscribe(
      (data) => {this.forumService.forums = data
      console.log(this.forumService.forums)
      }
    )
  }


  /*  createForum(form: NgForm) {
    const { forumUser, forumEmail, forumTitle, forumTags, ForumContent } = form.value
    if (!forumUser || !forumEmail || !forumTitle || !ForumContent) {
      return Swal.fire({icon: 'error',title: 'Oops...',text: 'No puedes dejar campos obligatorios vacios', confirmButtonColor: '#ffc107' })
    } 
  
    this.forumService.createForum(form.value).subscribe((res) => {
      Swal.fire({
        position: 'center',
        icon: 'success',
        text: 'pregunta registrada correctamente',
        showConfirmButton: true,
        confirmButtonColor: '#ffc107'
      })

      this.forumService.selectedForum.forumUser = ''
      this.forumService.selectedForum.forumEmail = ''
      this.forumService.selectedForum.forumTitle = ''
      this.forumService.selectedForum.forumTags = []
      this.forumService.selectedForum.ForumContent = ''
    })
  } */
 
    

}


