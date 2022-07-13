import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student.component';
import {CalendarComponent} from "../classCalendar/calendar/calendar.component";
import {ListExamsComponent} from "../exam/list-exams/list-exams.component";
import {HomeworkComponent} from "../homework/homework/homework.component";
import {StudentGradesComponent} from "../grades/student-grades/student-grades.component";

const routes: Routes = [
  { path: '', component: CalendarComponent },
  { path: 'cal', component: CalendarComponent },
  { path: 'list-quizzes', component: ListExamsComponent },
  { path: 'home-work', component: HomeworkComponent },
  { path: 'grades', component: StudentGradesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
