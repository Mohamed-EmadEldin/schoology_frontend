
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import { BrowserModule } from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {CoreModule} from "./core/core.module";
import {RouterModule} from "@angular/router";
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';

import {AppRoutingModule} from './app-routing.module';
import {NotFoundComponent} from './core/not-found/not-found.component';
import {ClassCalendarModule} from "./classCalendar/classCalendar.module";
import {MeetingModule} from "./meeting/meeting.module";
import { BodyModule } from './body/body.module';
import { StudentMessagesComponent } from './Messages/student-messages/student-messages.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    StudentMessagesComponent,

  ],
    imports: [
        BrowserModule,
        CoreModule,
        RouterModule,
        AppRoutingModule,
        BodyModule,
        MatInputModule,
        BrowserAnimationsModule,
        HttpClientModule,
        ClassCalendarModule,
        MeetingModule,
        MatButtonModule,

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
