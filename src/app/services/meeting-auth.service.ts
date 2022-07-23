import {Injectable, NgZone} from '@angular/core';
import {Observable, ReplaySubject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {StateService} from "./state.service";
import {MessageService} from "primeng/api";
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class MeetingAuthService {

  private auth2: gapi.auth2.GoogleAuth | undefined
  private subject = new ReplaySubject<gapi.auth2.GoogleUser | null>(1)
  private _url = "http://localhost:3000/meeting"

  constructor(private httpClient: HttpClient, private stateService: StateService, private router: Router, private ngZone: NgZone) {
    gapi.load('auth', () => {
      // @ts-ignore
      this.auth2 = gapi.auth2.init(
        // @ts-ignore
        {
          client_id: "43384519615-haoarcj3935ckm6s0t0cfh77ed2gd72k.apps.googleusercontent.com",
          // @ts-ignore
          plugin_name: "chat"
        })
    })

  }

  public createMeet(formData: any) {

    // @ts-ignore
    this.auth2.grantOfflineAccess({
      scope: "openid profile email https://www.googleapis.com/auth/calendar"
    }).then((resp) => {
      this.ngZone.run(() => this.cb(formData, resp))
    })
  }

  private cb(formData: any, resp: any) {
    let auth_code = resp.code;
    let body = {
      code: auth_code,
      date_time: formData.date,
      period: formData.period,
      name: formData.name,
      teacherId: this.stateService.getState().userId,
      classId: formData.classId,
      courseId: this.stateService.getState().courseId,
      description: formData.description,

    }
    console.log(body)
    this.httpClient.post<any>(`${this._url}/create`, body).subscribe(() => {

      this.router.navigate([`${this.stateService.getState().userType}/cal`])
    })
  }

  public observable(): Observable<gapi.auth2.GoogleUser> {
    // @ts-ignore
    return this.subject.asObservable()
  }

  public checkIsValidTime(data: any) {
    return this.httpClient.get<any>(`${this._url}/is-valid-time`, {
      params: {
        teacherId: this.stateService.getState().userId,
        period: data.period,
        date_time: data.date,
        classId: data.classId,
      }
    })
  }
}
