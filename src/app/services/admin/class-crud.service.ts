import { Injectable } from '@angular/core';``
import {HttpClient} from "@angular/common/http";
import {ClassRoom} from "../../models/classRoom";

@Injectable({
  providedIn: 'root'
})
export class ClassCrudService {

  private url = 'http://127.0.0.1:3000/class'

  constructor(private http: HttpClient) { }

  createClass(name: string) {
    return this.http.post<ClassRoom>(this.url, {
      name: name
    })
  }

  getClasses() {
    return this.http.get<ClassRoom[]>(this.url)
  }

  updateClass(classId: number, className: string) {
      return this.http.put<ClassRoom>(`${this.url}/${classId}`, {
        name: className
      })
  }

  deleteClass(classId: number) {
    return this.http.delete(`${this.url}/${classId}`)
  }

}
