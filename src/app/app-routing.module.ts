import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from "@angular/router";
import {HomeComponent} from "./body/home/home.component";
import {NotFoundComponent} from "./core/not-found/not-found.component";
import {CalendarComponent} from "./classCalendar/calendar/calendar.component";
import {CreateMeetingComponent} from "./meeting/create-meeting/create-meeting.component";

const routes:Routes = [
  {path: "", component:HomeComponent},
  {path: "cal", component:CalendarComponent},
  {path: "create-meeting", component:CreateMeetingComponent},
  {path: '**', component:NotFoundComponent},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
