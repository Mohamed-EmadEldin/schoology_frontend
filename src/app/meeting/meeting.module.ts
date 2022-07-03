import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// @ts-ignore
import {
  SocialLoginModule,
  SocialAuthServiceConfig,
  GoogleLoginProvider,
  GoogleInitOptions
} from '@abacritt/angularx-social-login';
import { LoginWithGoogleComponent } from './login-with-google/login-with-google.component';

// @ts-ignore

// @ts-ignore
@NgModule({
  declarations: [
    LoginWithGoogleComponent
  ],
  imports: [
    CommonModule,
  ],
  providers:[],
  exports:[
    LoginWithGoogleComponent
  ],

})
export class MeetingModule { }
