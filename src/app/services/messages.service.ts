import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {ITeacherMessages} from "../classMessages/messages/messages.component";

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

 public baseUrl:string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getMessages(id: number){
    return this.http.get(`${this.baseUrl}/message/reciever/${id}`)
  }

  sendMessages(message: any){
    console.log(message)
    return this.http.post(`${this.baseUrl}/message/create`, message);
  }

  // filter(key:string){
  //   return this.http.post(`${this.baseUrl}/filter?key=${key}`, {});
  // }

  getMyMessages (){
    return this.http.get<ITeacherMessages|any>(`${this.baseUrl}/message/my-received-messages`)
}

 filter(classID:number){
   return this.http.post(`${this.baseUrl}/class/list-students/${classID}`, {});
  }
  getMyPossibleReceivers(){
    return this.http.get<any>(`${this.baseUrl}/message/my-message-recipients`)
  }
}
