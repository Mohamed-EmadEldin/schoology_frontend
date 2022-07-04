import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';

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



  constructor(private authService: MeetingAuthService) { }

  ngOnInit(): void {
  }


  signInWithGoogle(): void {
    this.authService.createMeet();
    console.log("sas")
  }



}
