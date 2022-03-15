import { Injectable} from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Forum } from "../Models/forum.model";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: `root`
})

export class ForumService {
// 622b9d694bf7ee934366a3b6 622ba06c4bf7ee934366a3b9 622e961ca0408604498e59f8
 
  selectedForum: Forum
  forums: any
  url_api = `${environment.API_URL}/forum`

  constructor(public http: HttpClient){
this.selectedForum = new Forum
  }


getForum(){
  return this.http.get(`${this.url_api}/get-forum`)
}

/* createForum(credentials: any){
  return this.http.post(`${this.url_api}/create-forum`, credentials)
} */

createForum(formForum: Forum) {
  return this.http.post(`${this.url_api}/create-forum`, formForum);
}

updateAnswer(answer:any){
  return this.http.put(`${this.url_api}/update-answer/${answer.id}`, {ForumAnswers:answer.text});
}
}

