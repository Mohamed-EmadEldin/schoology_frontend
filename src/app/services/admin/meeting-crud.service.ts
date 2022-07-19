import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {StateService} from "../state.service";
import {Meeting} from "../../models/meeting";

@Injectable({
  providedIn: 'root'
})
export class MeetingCrudService {

  constructor(private http: HttpClient, private stateService: StateService) { }

  private url = "http://127.0.0.1:3000/meeting"
  private state = this.stateService.getState();
  private adminId = this.state.userType === 'admin' ? this.state.userId : -1;
  private auth2: gapi.auth2.GoogleAuth | undefined;

  getMeetings() {
    return this.http.get<Meeting[]>(`${this.url}/all-meetings/${this.adminId}?role=admin`)
  }

  createMeeting(meet: Meeting) {
    this.auth2?.grantOfflineAccess({
      scope:"openid profile email https://www.googleapis.com/auth/calendar"
    }).then(resp => {
      let auth_code = resp.code;
      let body = {
        code: auth_code,
        ...meet
      }
      this.http.post<any>(`${this.url}/create`, body)
    })
  }

  updateMeeting(meetId: number, meet: Meeting) {
    return this.http.put<Meeting>(`${this.url}/update/${meetId}`, meet);
  }

  deleteMeet(meetId: number) {
    return this.http.delete(`${this.url}/delete/${meetId}`);
  }

}
