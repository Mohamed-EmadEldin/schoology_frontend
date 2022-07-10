import { Injectable } from '@angular/core';
import {Observable, ReplaySubject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {StateService} from "./state.service";

@Injectable({
  providedIn: 'root'
})
export class MeetingAuthService {

  private auth2: gapi.auth2.GoogleAuth | undefined
  private subject = new ReplaySubject<gapi.auth2.GoogleUser | null>(1)
  constructor(private httpClient:HttpClient,private stateService:StateService) {
    gapi.load('auth',()=>{
      // @ts-ignore
      this.auth2=gapi.auth2.init(
        // @ts-ignore
        {
        client_id :"43384519615-haoarcj3935ckm6s0t0cfh77ed2gd72k.apps.googleusercontent.com",
          // @ts-ignore
        plugin_name: "chat"
      })
    })

  }
  public createMeet(formData:any){

    // @ts-ignore
    this.auth2.grantOfflineAccess({
      scope:"openid profile email https://www.googleapis.com/auth/calendar"
    }).then((resp) =>{
      let auth_code = resp.code;
      let body ={
        code:auth_code,
        date_time:formData.date,
        period:formData.period,
        name:formData.name,
        teacherId:this.stateService.getState().userId,
        classId:formData.classId,
        courseId:this.stateService.getState().courseId,
        description:formData.description,

      }
      console.log(body)
      this.httpClient.post<any>("http://localhost:3000/meeting/create",body).subscribe((res)=>{
        let data = res
        console.log(data)
      })
      console.log(auth_code)
    })
  }

  public observable() : Observable<gapi.auth2.GoogleUser>
  {
    // @ts-ignore
    return this.subject.asObservable()
  }
}
