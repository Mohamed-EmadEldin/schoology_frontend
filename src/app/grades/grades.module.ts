import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ClassesGradesComponent} from "./classes-grades/classes-grades.component";
import {CalendarModule} from "primeng/calendar";
import {FormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {TableModule} from "primeng/table";
import {ToastModule} from "primeng/toast";
import {RippleModule} from "primeng/ripple";
import {RouterModule} from "@angular/router";
import { StudentsGradesComponent } from './students-grades/students-grades.component';
import { StudentGradesComponent } from './student-grades/student-grades.component';



@NgModule({
  declarations: [
    ClassesGradesComponent,
    StudentsGradesComponent,
    StudentGradesComponent
  ],
  imports: [
    CommonModule,
    CalendarModule,
    FormsModule,
    InputTextModule,
    TableModule,
    ToastModule,
    RippleModule,
    RouterModule
  ],
  exports:[
    ClassesGradesComponent
  ]
})
export class GradesModule { }
