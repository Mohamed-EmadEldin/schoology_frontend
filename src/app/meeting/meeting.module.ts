import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DropdownModule} from "primeng/dropdown";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CalendarModule} from "primeng/calendar";
import { CreateMeetingComponent } from './create-meeting/create-meeting.component';
import {CardModule} from "primeng/card";
import {InputTextModule} from "primeng/inputtext";
import {InputNumberModule} from "primeng/inputnumber";
import {MessageModule} from "primeng/message";

@NgModule({
  declarations: [
    CreateMeetingComponent
  ],
  imports: [
    CommonModule,
    DropdownModule,
    FormsModule,
    CalendarModule,
    CardModule,
    InputTextModule,
    InputNumberModule,
    ReactiveFormsModule,
    MessageModule,
  ],
  providers:[],
  exports:[
    CreateMeetingComponent
  ],

})
export class MeetingModule { }
