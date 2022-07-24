import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ClassRoom} from "../../models/classRoom";
import {Course} from "../../models/course";

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  private url: string = "http://127.0.0.1:3000"

  constructor(private http: HttpClient) { }

  getTeacherClasses(teacherId: number) {
    return this.http.get<ClassRoom[]>(`${this.url}/class/teacher-classes/${teacherId}`)
  }

  getTeacherCourse(teacherId: number) {
    return this.http.get<Course[]>(`${this.url}/course/my-course/${teacherId}`)
  }

}
