import {ChangeDetectorRef, Component, OnInit} from '@angular/core';

// @ts-ignore
import { SocialAuthService,GoogleLoginProvider,SocialUser } from "@abacritt/angularx-social-login";
import {HttpClient} from "@angular/common/http";
import {MeetingAuthService} from "../../services/meeting-auth.service";
// @ts-ignore

@Component({
  selector: 'app-login-with-google',
  templateUrl: './login-with-google.component.html',
  styleUrls: ['./login-with-google.component.css']
})
export class LoginWithGoogleComponent implements OnInit {

  user: gapi.auth2.GoogleUser | null | undefined;
  loggedIn: boolean | undefined;
  private accessToken:string = '';

  private googleClientId:string = "43384519615-haoarcj3935ckm6s0t0cfh77ed2gd72k.apps.googleusercontent.com"
  // config = [
  //   {
  //     id: GoogleLoginProvider.PROVIDER_ID,
  //     provider: new GoogleLoginProvider(this.googleClientId, this.googleLoginOptions)
  //   },
  //  ]


  constructor(private authService: MeetingAuthService,private httpClient:HttpClient,private ref:ChangeDetectorRef) { }

  ngOnInit(): void {
    this.authService.observable().subscribe((user: gapi.auth2.GoogleUser|null) => {
      this.user = user;

      // this.loggedIn = (user != null);
      console.log(user)

    });
    console.log("init")



  }

  // getAccessToken(): void {
  //
  //   this.authService.getAccessToken(GoogleLoginProvider.PROVIDER_ID).then(accessToken => {
  //     this.accessToken = accessToken
  //     this.getGoogleCalendarData()
  //   console.log(accessToken)});
  // }
  signInWithGoogle(): void {
    this.authService.signIn();
    console.log("sas")
  }
  // refreshToken(): void {
  //   this.authService.refreshAuthToken(GoogleLoginProvider.PROVIDER_ID).then()
  // }

  getGoogleCalendarData(): void {
    if (!this.accessToken) return;

    this.httpClient
      .get('https://www.googleapis.com/calendar/v3/calendars/primary/events', {
        headers: { Authorization: `Bearer ${this.accessToken}` },
      })
      .subscribe((events: any) => {
        alert('Look at your console');
        console.log('events', events);
      });
  }
}
