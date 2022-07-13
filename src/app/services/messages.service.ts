import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getMessages(id: number){
    return this.http.get(`${this.baseUrl}/message/reciever/${id}`)
  }

  sendMessages(message: any){
    return this.http.post(`${this.baseUrl}/create`, message);
  }

  // filter(key:string){
  //   return this.http.post(`${this.baseUrl}/filter?key=${key}`, {});
  // }

 filter(classID:number){
   return this.http.post(`${this.baseUrl}/class/list-students/${classID}`, {});
  }
}
