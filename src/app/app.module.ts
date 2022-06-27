import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {MeetingModule} from "./meeting/meeting.module";
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MeetingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
