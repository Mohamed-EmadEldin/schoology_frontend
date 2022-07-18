import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../../models/user";
import {ClassRoom} from "../../models/classRoom";

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  private url: string = "http://127.0.0.1:3000"

  constructor(private http: HttpClient) { }

  getAllTeachers() {
    return this.http.get<User[]>(`${this.url}/auth/allTeachers`)
  }

  getTeacherClasses(teacherId: number) {
    return this.http.get<any[]>(`${this.url}/class/teacher-classes/${teacherId}`)
  }

  getTeacherCourse(teacherId: number) {
    return this.http.get<any[]>(`${this.url}/course/my-course/${teacherId}`)
  }

}
