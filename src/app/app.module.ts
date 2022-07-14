import {NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {CoreModule} from "./core/core.module";
import {RouterModule} from "@angular/router";
import {MatInputModule} from '@angular/material/input';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';

import { MatTableModule } from '@angular/material/table';



import {MatPaginatorModule} from '@angular/material/paginator';
import {AppRoutingModule} from './app-routing.module';
import {NotFoundComponent} from './core/not-found/not-found.component';
import {ClassCalendarModule} from "./classCalendar/classCalendar.module";
import {BodyModule} from './body/body.module';
import {TeacherModule} from "./teacher/teacher.module";
import {HomeworkModule} from "./homework/homework.module";
import {MessageModule} from "primeng/message";
import {AuthtokenInterceptor} from "./interceptors/authtoken.interceptor";
import {GradesModule} from "./grades/grades.module";
import { NotificationComponent } from './notification/notification.component';
import {TableModule} from "primeng/table";
import {InputTextModule} from "primeng/inputtext";

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    NotificationComponent
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
    GradesModule,
    TableModule,
    InputTextModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthtokenInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
