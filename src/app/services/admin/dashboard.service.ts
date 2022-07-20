import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Announcement} from "../../models/announcement";
import {GallaryImage} from "../../models/gallaryImage";

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private _announcement_url = 'http://127.0.0.1:3000/announcement/create';
  private _gallaryImage_url = 'http://127.0.0.1:3000/gallary/add'
  constructor(private http: HttpClient) { }

  sendAnnouncement(announcement:Announcement)
  {
    return this.http.post(this._announcement_url,announcement)
  }

  addNewGallaryImage(newGallaryImage: GallaryImage) {
    return this.http.post(this._gallaryImage_url,newGallaryImage)
  }
}
