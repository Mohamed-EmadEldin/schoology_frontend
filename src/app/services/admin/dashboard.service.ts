import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Announcement} from "../../models/announcement";
import {GallaryImage} from "../../models/gallaryImage";

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private _announcement_url = 'http://127.0.0.1:3000/announcement';
  private _gallary_url = 'http://127.0.0.1:3000/gallary'
  constructor(private http: HttpClient) { }

  sendAnnouncement(announcement:Announcement)
  {
    return this.http.post(`${this._announcement_url}/create`,announcement)
  }
  getLastAnnouncement() {
   return this.http.get<Announcement[]>(`${this._announcement_url}/last`)
  }

  getGallaryImages()
  {
    return this.http.get<GallaryImage[]>(`${this._gallary_url}/`)
  }
  addNewGallaryImage(newGallaryImage: GallaryImage) {
    return this.http.post(`${this._gallary_url}/add`,newGallaryImage)
  }



  deleteImage(selectedImageToDelete: GallaryImage) {
    return this.http.delete(`${this._gallary_url}/delete`,{
      body:{
        imageId:selectedImageToDelete.id
      }
    })
  }


}
