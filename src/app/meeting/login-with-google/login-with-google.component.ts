import { Component, OnInit } from '@angular/core';

// @ts-ignore
import { SocialAuthService,GoogleLoginProvider,SocialUser } from "@abacritt/angularx-social-login";
import {HttpClient} from "@angular/common/http";
// @ts-ignore

@Component({
  selector: 'app-login-with-google',
  templateUrl: './login-with-google.component.html',
  styleUrls: ['./login-with-google.component.css']
})
export class LoginWithGoogleComponent implements OnInit {

  user: SocialUser | undefined;
  loggedIn: boolean | undefined;
  private accessToken:string = '';

  private googleClientId:string = "43384519615-haoarcj3935ckm6s0t0cfh77ed2gd72k.apps.googleusercontent.com"
  // config = [
  //   {
  //     id: GoogleLoginProvider.PROVIDER_ID,
  //     provider: new GoogleLoginProvider(this.googleClientId, this.googleLoginOptions)
  //   },
  //  ]


  constructor(private authService: SocialAuthService,private httpClient:HttpClient ) { }

  ngOnInit(): void {
    this.authService.authState.subscribe((user: SocialUser) => {
      this.user = user;
      this.loggedIn = (user != null);
      console.log(user)

    });
    console.log("init")



  }

  getAccessToken(): void {
    this.authService.getAccessToken(GoogleLoginProvider.PROVIDER_ID).then(accessToken => {
      this.accessToken = accessToken
      this.getGoogleCalendarData()
    console.log(accessToken)});
  }
  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    console.log("sas")
  }
  refreshToken(): void {
    this.authService.refreshAuthToken(GoogleLoginProvider.PROVIDER_ID).then()
  }

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
