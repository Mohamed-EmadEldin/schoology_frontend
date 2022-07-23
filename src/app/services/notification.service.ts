import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {StateService} from "./state.service";

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private notifications = {};
  userId;
  url;

  constructor(private http: HttpClient, private stateService: StateService) {
    if (stateService.getState().userId != -1) {
      this.userId = stateService.getState().userId
    }
    //TODO: [ph]
    this.userId = 2
    this.url = `http://127.0.0.1:3000/nots/`;
  }

  getUserNotification() {
    let url = this.url+`myNots/` + this.stateService.getState().personId
    return this.http.get<any>(url)

  }

  getNewNotificationsCount() {
    let url = this.url+`/myNotsCount`
    return this.http.get<any>(url)
  }

}
