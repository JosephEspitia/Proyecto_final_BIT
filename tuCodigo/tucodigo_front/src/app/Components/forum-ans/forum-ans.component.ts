import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ForumService } from 'src/app/Services/forum.service';


@Component({
  selector: 'app-forum-ans',
  templateUrl: './forum-ans.component.html',
  styleUrls: ['./forum-ans.component.css']
})
export class ForumAnsComponent implements OnInit {
idForum : string

  constructor(public forumService: ForumService, public router:Router) {
    this.idForum = ``
  
  
   
   }

  ngOnInit(): void {
    this.getForum()
    this.idForum = window.location.pathname.split(`/`)[2]
    console.log(this.idForum)
   }

  getForum(){
    this.forumService.getForum().subscribe(
      (data) => {this.forumService.forums = data
      console.log(this.forumService.forums)
      }
    )
  }

  backForum(){
    this.router.navigate([`/forum`])
  }

  updateAnswer(text: string, id:string){
    this.forumService.updateAnswer({id,text}).subscribe(res => {
      console.log(res)
    })


    
  }

}

