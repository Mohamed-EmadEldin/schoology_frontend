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
const   googleLoginOptions:GoogleInitOptions= {
  oneTapEnabled: false,
  scopes: ["openid", "profile", "email" ,"https://www.googleapis.com/auth/calendar"]
};

// @ts-ignore
@NgModule({
  declarations: [
    LoginWithGoogleComponent
  ],
  imports: [
    CommonModule,
    SocialLoginModule
  ],
  providers:[
    {
      provide: 'SocialAuthServiceConfig',

      useValue: {
        autoLogin: false,
        // config:[
        //   {
        //     id: GoogleLoginProvider.PROVIDER_ID,
        //     provider: new GoogleLoginProvider("Google-OAuth-Client-Id", googleLoginOptions)
        //   },],
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              "43384519615-haoarcj3935ckm6s0t0cfh77ed2gd72k.apps.googleusercontent.com",{
                oneTapEnabled: false,
                scopes: ["openid", "profile", "email" ,"https://www.googleapis.com/auth/calendar"]
              }
            )
          },
        ],
        onError: (err) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    }

  ],
  exports:[
    LoginWithGoogleComponent
  ],

})
export class MeetingModule { }
