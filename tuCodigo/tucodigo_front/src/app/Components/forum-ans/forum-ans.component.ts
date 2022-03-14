import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ForumService } from 'src/app/Services/forum.service';


@Component({
  selector: 'app-forum-ans',
  templateUrl: './forum-ans.component.html',
  styleUrls: ['./forum-ans.component.css']
})
export class ForumAnsComponent implements OnInit {

  constructor(public forumService: ForumService, public router:Router) {
  
  
   
   }

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

  backForum(){
    this.router.navigate([`/forum`])
  }

}

