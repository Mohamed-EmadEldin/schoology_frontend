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

  getMeetings() {
    return this.http.get<Meeting[]>(`${this.url}/all-meetings/${this.adminId}?role=admin`)
  }

  updateMeeting(meetId: number, meet: Meeting) {
    return this.http.put<Meeting>(`${this.url}/update/${meetId}`, meet);
  }

  deleteMeet(meetId: number) {
    return this.http.delete(`${this.url}/delete/${meetId}`);
  }

}
