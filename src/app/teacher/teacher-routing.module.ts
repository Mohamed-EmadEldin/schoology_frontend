import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeacherComponent } from './teacher.component';
import {CreateMeetingComponent} from "./meeting/create-meeting/create-meeting.component";
import {CalendarComponent} from "../classCalendar/calendar/calendar.component";
import {CreateExamComponent} from "./exam/create-exam/create-exam.component";
import {ListExamsComponent} from "./exam/list-exams/list-exams.component";
import {HomeworkComponent} from "../homework/homework/homework.component";

const routes: Routes = [
  { path: 'create-meeting', component: CreateMeetingComponent },
  { path: 'cal', component: CalendarComponent },
  { path: 'create-exam', component: CreateExamComponent },
  { path: 'list-quizzes', component: ListExamsComponent },
  { path: 'create-quiz', component: CreateExamComponent },
  { path: 'home-work', component: HomeworkComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
