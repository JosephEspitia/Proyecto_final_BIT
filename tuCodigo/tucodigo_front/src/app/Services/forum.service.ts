import { Injectable} from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Forum } from "../Models/forum.model";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: `root`
})

export class ForumService {

 
  selectedForum: Forum
  forums: any
  url_api = `${environment.API_URL}/forum`

  constructor(public http: HttpClient){
this.selectedForum = new Forum
  }


getForum(){
  return this.http.get(`${this.url_api}/get-forum`)
}



createForum(formForum: Forum) {
  return this.http.post(`${this.url_api}/create-forum`, formForum);
}

updateAnswer(answer:any){
  return this.http.put(`${this.url_api}/update-answer/${answer.id}`, {ForumAnswers:answer.text});
}


deleteForum (_id:any) {
  return this.http.delete(`${this.url_api}/delete-forum/${_id}`)
}

updateForum (_id:any, element:any) {
  return this.http.put(`${this.url_api}/update-forum/${_id}`, element)
}

getOneForum(_id:any){
  return this.http.get(`${this.url_api}/get-one-forum/${_id}`)
}
}

