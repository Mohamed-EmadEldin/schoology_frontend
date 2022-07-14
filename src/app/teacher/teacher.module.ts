import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherRoutingModule } from './teacher-routing.module';
import { TeacherComponent } from './teacher.component';
import {MeetingModule} from "../meeting/meeting.module";
import {ExamModule} from "../exam/exam.module";


@NgModule({
  declarations: [
    TeacherComponent,
  ],
  imports: [
    CommonModule,
    TeacherRoutingModule,
    MeetingModule,
    ExamModule
  ]
})
export class TeacherModule { }
