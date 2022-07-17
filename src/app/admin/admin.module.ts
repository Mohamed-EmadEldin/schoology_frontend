import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminMainComponent } from './admin-main/admin-main.component';
import {CardModule} from "primeng/card";
import { MeetingCrudComponent } from './meeting-crud/meeting-crud.component';
import { ExamsCrudComponent } from './exams-crud/exams-crud.component';
import { UsersCrudComponent } from './users-crud/users-crud.component';
import { ClassCrudComponent } from './class-crud/class-crud.component';
import {TableModule} from "primeng/table";
import {InputTextModule} from "primeng/inputtext";
import {FormsModule} from "@angular/forms";
import {DropdownModule} from "primeng/dropdown";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {ToastModule} from "primeng/toast";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {ToolbarModule} from "primeng/toolbar";
import {DialogModule} from "primeng/dialog";
import {AutoCompleteModule} from "primeng/autocomplete";
import {CalendarModule} from "primeng/calendar";


@NgModule({
  declarations: [
    AdminMainComponent,
    MeetingCrudComponent,
    ExamsCrudComponent,
    UsersCrudComponent,
    ClassCrudComponent
  ],
    imports: [
        CommonModule,
        AdminRoutingModule,
        CardModule,
        TableModule,
        InputTextModule,
        FormsModule,
        DropdownModule,
        ButtonModule,
        RippleModule,
        ToastModule,
        ConfirmDialogModule,
        ToolbarModule,
        DialogModule,
        AutoCompleteModule,
        CalendarModule
    ]
})
export class AdminModule { }
