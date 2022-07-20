import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration/registration.component';
import { CoreModule } from '../core/core.module';
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
import {MessageModule} from "primeng/message";

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CourseCrudComponent } from './course-crud/course-crud.component';
import { CreateUserComponent } from './create-user/create-user.component';
import {PasswordModule} from "primeng/password";
import {DividerModule} from "primeng/divider";
import {InputMaskModule} from "primeng/inputmask";
import {RadioButtonModule} from "primeng/radiobutton";
import {MultiSelectModule} from "primeng/multiselect";
import {PaginatorModule} from "primeng/paginator";
import {InputTextareaModule} from "primeng/inputtextarea";


@NgModule({
  declarations: [
    AdminMainComponent,
    MeetingCrudComponent,
    ExamsCrudComponent,
    UsersCrudComponent,
    ClassCrudComponent,
    RegistrationComponent,
    DashboardComponent,
    CourseCrudComponent,
    CreateUserComponent
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
        CalendarModule,
        MessageModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatRadioModule,
        PasswordModule,
        DividerModule,
        InputMaskModule,
        RadioButtonModule,
        MultiSelectModule,
        PaginatorModule,
        InputTextareaModule
    ]
})
export class AdminModule { }
