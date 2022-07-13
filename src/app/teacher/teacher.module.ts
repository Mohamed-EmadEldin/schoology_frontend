import { MessagesModule } from './classMessages/messages.module';
import { CoreModule } from './../core/core.module';
import { FormsModule } from '@angular/forms';


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherRoutingModule } from './teacher-routing.module';
import { TeacherComponent } from './teacher.component';
import {MeetingModule} from "./meeting/meeting.module";
import {ExamModule} from "./exam/exam.module";
// import { MessagestModule } from './classMessages/messages.module';
import {MatTableModule} from '@angular/material/table';



@NgModule({
  declarations: [
    TeacherComponent
  ],
  imports: [
    CommonModule,
    TeacherRoutingModule,
    MeetingModule,
    ExamModule,
    FormsModule,
    MatTableModule,
    MessagesModule,
  ]
})
export class TeacherModule { }
