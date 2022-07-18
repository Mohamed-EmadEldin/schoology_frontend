import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ClassRoom} from "../../models/classRoom";
import {User} from "../../models/user";

@Injectable({
  providedIn: 'root'
})
export class UsersCrudService {

  private url = 'http://127.0.0.1:3000/auth'

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<User[]>(`${this.url}/allUsers`)
  }

  updateUser(userId: number, user: User) {
    return this.http.put<User>(`${this.url}/${userId}`, User)
  }

  deactivateUser(userId: number) {
    return this.http.patch(`${this.url}/${userId}`, {})
  }

}
