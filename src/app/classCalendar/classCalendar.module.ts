import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpcomingEventsComponent } from './upcoming-events/upcoming-events.component';
import { CurrentEventsComponent } from './current-events/current-events.component';
import { MonthComponent } from './month/month.component';
import { CalendarComponent } from './calendar/calendar.component';
import {CalendarModule} from "primeng/calendar";
import {FormsModule} from "@angular/forms";
import {CardModule} from "primeng/card";
import {RippleModule} from "primeng/ripple";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    UpcomingEventsComponent,
    CurrentEventsComponent,
    MonthComponent,
    CalendarComponent
  ],
    imports: [
        CommonModule,
        CalendarModule,
        FormsModule,
        CardModule,
        RippleModule,
        RouterModule
    ]
})
export class ClassCalendarModule { }
