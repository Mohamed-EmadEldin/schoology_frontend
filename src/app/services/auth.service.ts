import {Injectable} from '@angular/core';
import {IAppState, StateService} from "./state.service";
import {HttpClient} from "@angular/common/http";

import {Subject} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private stateService: StateService,private http:HttpClient) {
  }

  login(data:any)
  {
     return this.http.post<IAppState>('http://localhost:3000/auth/signin', data)
  }
  isLoggedIn():boolean
  {
    return  !!localStorage.getItem("token")
  }
  isTeacher():boolean
  {
    return this.stateService.getState().userType === "teacher"
  }

  logout() {
    localStorage.removeItem("token")
  }
}
