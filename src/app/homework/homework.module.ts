import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListHomeworkComponent } from './list-homework/list-homework.component';
import {ButtonModule} from "primeng/button";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {InputTextModule} from "primeng/inputtext";
import {FileUploadModule} from "primeng/fileupload";
import {ToastModule} from "primeng/toast";
import { UploadComponent } from './upload/upload.component';
import { HomeworkComponent } from './homework/homework.component';
import {TableModule} from "primeng/table";
import {CalendarModule} from "primeng/calendar";
import {DividerModule} from "primeng/divider";
import {DropdownModule} from "primeng/dropdown";
import {MessageModule} from "primeng/message";


@NgModule({
  declarations: [
    ListHomeworkComponent,
    UploadComponent,
    HomeworkComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    InputTextModule,
    FileUploadModule,
    ToastModule,
    TableModule,
    CalendarModule,
    DividerModule,
    DropdownModule,
    MessageModule
  ]
})
export class HomeworkModule { }
