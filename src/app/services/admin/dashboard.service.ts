import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Announcement} from "../../models/announcement";

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private _announcement_url = 'http://127.0.0.1:3000/announcement/create';

  constructor(private http: HttpClient) { }

  sendAnnouncement(announcement:Announcement)
  {
    return this.http.post(this._announcement_url,announcement)
  }
}
