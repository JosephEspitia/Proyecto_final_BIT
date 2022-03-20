import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ForumService } from 'src/app/Services/forum.service';
import { Forum } from 'src/app/Models/forum.model';

@Component({
  selector: 'app-forum-ans',
  templateUrl: './forum-ans.component.html',
  styleUrls: ['./forum-ans.component.css'],
})
export class ForumAnsComponent implements OnInit {
  idForum: string;

  constructor(public forumService: ForumService, public router: Router) {
    this.idForum = ``;
  }

  ngOnInit(): void {
    /*  this.getForum() */
    this.idForum = window.location.pathname.split(`/`)[2];
    console.log(this.idForum);
    this.getOneForum(this.idForum);
  }

  getForum() {
    this.forumService.getForum().subscribe((data) => {
      this.forumService.forums = data;
      console.log(this.forumService.forums);
    });
  }

  getOneForum(id: string) {
    this.forumService.getOneForum(this.idForum).subscribe((res) => {
      this.forumService.selectedForum = res as Forum;
      console.log(res);
    });
  }

  updateAnswer(id: string, form: NgForm) {
    this.forumService
      .updateAnswer({ id, text: form.value.textAnswer })
      .subscribe((res) => {
        console.log(res);
        this.getOneForum(this.idForum);
      });

    console.log(id, form.value);
  }

  popupAnswer: boolean = false;

  popupAnswerF() {
    if (this.popupAnswer == false) {
      return (this.popupAnswer = true);
    } else {
      return (this.popupAnswer = false);
    }
  }
}
