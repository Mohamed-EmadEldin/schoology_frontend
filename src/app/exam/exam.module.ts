import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateExamComponent } from './create-exam/create-exam.component';
import { ListExamsComponent } from './list-exams/list-exams.component';
import {TableModule} from "primeng/table";
import {InputTextModule} from "primeng/inputtext";
import {CalendarModule} from "primeng/calendar";
import {FormsModule} from "@angular/forms";
import {RippleModule} from "primeng/ripple";
import {RouterModule} from "@angular/router";
import {CardModule} from "primeng/card";
import {DropdownModule} from "primeng/dropdown";
import {MessageModule} from "primeng/message";
import {ToastModule} from "primeng/toast";



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
        FormsModule,
        RippleModule,
        RouterModule,
        CardModule,
        DropdownModule,
        MessageModule,
        ToastModule
    ]
})
export class ExamModule { }
