import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Announcement} from "../../models/announcement";
import {GallaryImage} from "../../models/gallaryImage";

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private _announcement_url = 'http://127.0.0.1:3000/announcement/create';
  private _addGallaryImage_url = 'http://127.0.0.1:3000/gallary/add'
  private _gallaryImages_url = 'http://127.0.0.1:3000/gallary/'
  private _deleteGallaryImage_url = 'http://127.0.0.1:3000/gallary/delete'
  private _url = 'http://127.0.0.1:3000/gallary'
  constructor(private http: HttpClient) { }

  sendAnnouncement(announcement:Announcement)
  {
    return this.http.post(this._announcement_url,announcement)
  }

  addNewGallaryImage(newGallaryImage: GallaryImage) {
    return this.http.post(`${this._url}/add`,newGallaryImage)
  }

  getGallaryImages()
  {
    return this.http.get<GallaryImage[]>(`${this._url}/`)
  }

  deleteImage(selectedImageToDelete: GallaryImage) {
    return this.http.delete(`${this._url}/delete`,{
      body:{
        imageId:selectedImageToDelete.id
      }
    })
  }
}
