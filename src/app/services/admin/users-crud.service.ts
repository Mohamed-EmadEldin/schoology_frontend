import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../../models/user";
import {environment} from "../../../environments/environment";
import {Teacher} from "../../models/teacher";

@Injectable({
  providedIn: 'root'
})
export class UsersCrudService {

  private url = `${environment.baseUrl}/auth`

  constructor(private http: HttpClient) {
  }

  getUsers() {
    return this.http.get<User[]>(`${this.url}/allUsers`)
  }

  getAllTeachers() {
    return this.http.get<Teacher[]>(`${this.url}/allTeachers`)
  }

  getAllStudents() {
    return this.http.get<User[]>(`${this.url}/allStudents`)
  }

  registerTeacher(formData: any) {
    return this.http.post(`${this.url}/signup/teacher`, formData)
  }

  registerStudent(formData: any) {
    return this.http.post(`${this.url}/signup/student`, formData)
  }

  registerParent(formData: any) {
    return this.http.post(`${this.url}/signup/parent`, formData)
  }

  updateUser(userId: number, user: User) {
    return this.http.put<User>(`${this.url}/${userId}`, User)
  }

  deactivateUser(userId: number) {
    return this.http.patch(`${this.url}/deactivate/${userId}`, {})
  }

  activate(id: number) {
    return this.http.patch(`${this.url}/activate/${id}`, {})
  }

  resetPassword(id: string | null, password: string) {
    return this.http.post<any>(`${this.url}/reset-password`, {
      id, password
    })
  }
}
