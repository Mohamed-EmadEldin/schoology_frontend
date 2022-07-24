import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Course} from "../../models/course";

@Injectable({
  providedIn: 'root'
})
export class CourseCrudService {

  private url = 'http://127.0.0.1:3000/course'

  constructor(private http: HttpClient) { }

  getCourses() {
    return this.http.get<Course[]>(`${this.url}/get-all`)
  }

  createCourse(name: string) {
    return this.http.post<Course>(`${this.url}/create`, {
      name: name
    })
  }

  updateCourse(courseId: number, courseName: string) {
    return this.http.put<Course>(`${this.url}/update/${courseId}`, {
      name: courseName
    })
  }

  deleteCourse(courseId: number) {
    return this.http.delete(`${this.url}/delete/${courseId}`)
  }

}
