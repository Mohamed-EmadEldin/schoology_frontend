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
import { AdminComponent } from './admin/admin.component';
import {MessagesModule} from "./classMessages/messages.module";
import {MatFormFieldModule} from "@angular/material/form-field";
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { NgImageSliderModule } from 'ng-image-slider';
@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    NotificationComponent,
    AdminComponent,
    DashboardComponent,

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
    InputTextModule,
    MessagesModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    MatDatepickerModule,
    MatCardModule,
    MatGridListModule,
    NgImageSliderModule,

  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthtokenInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
