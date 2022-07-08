import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateExamComponent } from './create-exam/create-exam.component';
import { ListExamsComponent } from './list-exams/list-exams.component';
import {TableModule} from "primeng/table";
import {InputTextModule} from "primeng/inputtext";
import {CalendarModule} from "primeng/calendar";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    CreateExamComponent,
    ListExamsComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    InputTextModule,
    CalendarModule,
    FormsModule
  ]
})
export class ExamModule { }
