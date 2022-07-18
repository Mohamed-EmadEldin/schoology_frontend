import { Injectable } from '@angular/core';
import {Subject} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root',
})
export class SidebarService {

  sidebar: boolean;
 private newMessagesUrl:string ='http://localhost:3000/message/my-new-messages-count'
  constructor(private http:HttpClient) {
    this.sidebar = false;
  }

  toggleActive () {
    this.sidebar = !this.sidebar;
    return this.sidebar;
  }
  getNewMessagesCount(){
    return this.http.get<any>(this.newMessagesUrl)
  }

}
