import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { MessagesComponent } from './classMessages/messages/messages.component';


import { LoginComponent } from './core/login/login.component';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from "@angular/router";
import {HomeComponent} from "./body/home/home.component";
import {NotFoundComponent} from "./core/not-found/not-found.component";
import {CalendarComponent} from "./classCalendar/calendar/calendar.component";
import {CreateMeetingComponent} from "./meeting/create-meeting/create-meeting.component";
import {HomeworkComponent} from "./homework/homework/homework.component";
import {AuthGuard} from "./guards/auth.guard";
import {UnauthorizedComponent} from "./core/unauthorized/unauthorized.component";
import {IsTeacherGuard} from "./guards/is-teacher.guard";
import {IsStudentGuard} from "./guards/is-student.guard";
import {IsParentGuard} from "./guards/is-parent.guard";
import {NotificationComponent} from "./notification/notification.component";


const routes:Routes = [
  {path: "", component:HomeComponent},
  {
    path: "teacher-account",
    component: LoginComponent
  },
  {
    path: "student-account",
    component: LoginComponent
  },

  {
    path: "parent-account",
    component: LoginComponent
  },
  {
    path: "admin-account",
    component: LoginComponent
  },
  {
    path: "dashbord",
    component: DashboardComponent
  },


  {
    path: 'teacher',
    loadChildren: () => import('./teacher/teacher.module').then(m => m.TeacherModule),
    canActivate: [AuthGuard, IsTeacherGuard]
  },
  {
    path: 'student',
    loadChildren: () => import('./student/student.module').then(m => m.StudentModule),
    canActivate: [AuthGuard, IsStudentGuard]
  },
  {path: 'parent', loadChildren: () => import('./parent/parent.module').then(m => m.ParentModule),
    canActivate: [AuthGuard, IsParentGuard]},
  {path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)},
  { path: "notification", component: NotificationComponent },
  {path: "un-auth", component: UnauthorizedComponent},
  {path: '**', component: NotFoundComponent},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
