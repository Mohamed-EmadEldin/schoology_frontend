import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {StateService} from "../state.service";
import {Meeting} from "../../models/meeting";

@Injectable({
  providedIn: 'root'
})
export class MeetingCrudService {

  constructor(private http: HttpClient, private stateService: StateService) {
    gapi.load('auth',()=>{
      // @ts-ignore
      this.auth2=gapi.auth2.init(
        // @ts-ignore
        {
          client_id :"43384519615-haoarcj3935ckm6s0t0cfh77ed2gd72k.apps.googleusercontent.com",
          // @ts-ignore
          plugin_name: "chat"
        })
    })
  }

  private url = "http://127.0.0.1:3000/meeting"
  private state = this.stateService.getState();
  private adminId = this.state.userType === 'admin' ? this.state.userId : -1;
  private auth2: gapi.auth2.GoogleAuth | undefined;

  getMeetings() {
    return this.http.get<Meeting[]>(`${this.url}/all-meetings/${this.adminId}?role=admin`)
  }

  createMeeting(meet: Meeting) {
    console.log(meet)
    // @ts-ignore
    // @ts-ignore
    // @ts-ignore
    this.auth2.grantOfflineAccess({
      scope:"openid profile email https://www.googleapis.com/auth/calendar"
    }).then(resp => {
      let auth_code = resp.code;
      // @ts-ignore
      delete meet.link
      let body = {
        code: auth_code,
        date_time:meet.date,
        ...meet
      }
      console.log(meet)
      console.log(resp)
      this.http.post<any>(`${this.url}/create`, body).subscribe({
        next:()=>{

        },
        error:(error)=>{
          console.log(error)
        }
      })
    })
  }

  updateMeeting(meetId: number, meet: Meeting) {
    return this.http.put<Meeting>(`${this.url}/update/${meetId}`, meet);
  }

  deleteMeet(meetId: number) {
    return this.http.delete(`${this.url}/delete/${meetId}`);
  }

}
