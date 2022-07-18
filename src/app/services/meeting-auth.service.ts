import {Injectable, NgZone} from '@angular/core';
import {Observable, ReplaySubject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {StateService} from "./state.service";
import {MessageService} from "primeng/api";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class MeetingAuthService {

  private auth2: gapi.auth2.GoogleAuth | undefined
  private subject = new ReplaySubject<gapi.auth2.GoogleUser | null>(1)
  constructor(private httpClient:HttpClient,private stateService:StateService,private router:Router,private ngZone:NgZone) {
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
  public createMeet(formData:any,messageServiceObj:MessageService){

    // @ts-ignore
    this.auth2.grantOfflineAccess({
      scope:"openid profile email https://www.googleapis.com/auth/calendar"
    }).then((resp)=>{
      this.ngZone.run(()=>this.cb(formData,resp,messageServiceObj))
    })
  }

  private cb (formData:any,resp:any,messageServiceObj:MessageService) {
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
  this.httpClient.post<any>("http://localhost:3000/meeting/create",body).subscribe(()=>{

  messageServiceObj.add({severity:'success', summary:'Success', detail:`your meeting has been created`})
  this.router.navigate([`${this.stateService.getState().userType}/cal`])
})
console.log(auth_code)
}
  public observable() : Observable<gapi.auth2.GoogleUser>
  {
    // @ts-ignore
    return this.subject.asObservable()
  }
}
