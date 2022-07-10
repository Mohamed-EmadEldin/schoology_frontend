
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
import { BodyModule } from './body/body.module';
import {TeacherModule} from "./teacher/teacher.module";
import {HomeworkModule} from "./homework/homework.module";
import {MessageModule} from "primeng/message";

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
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
        MatButtonModule,
        MessageModule,

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
