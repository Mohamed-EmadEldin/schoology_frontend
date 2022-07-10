import { Component, OnInit } from '@angular/core';
import {CalendarService} from "../../services/calendar.service";
import {StateService} from "../../services/state.service";

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  constructor(public calendarService : CalendarService,public stateService:StateService) { }

  events: any;
  dateEventsArray: any;
  todayEventsArray: any;

  ngOnInit(): void {
    try {
      this.calendarService.apiGetDateEvents()
      this.calendarService.apiGetTodayEvents()
      setTimeout(()=> {
        this.events = this.calendarService.getDateEvents()
        this.dateEventsArray = Object.values(this.events)
        this.events = this.calendarService.getTodayEvents()
        this.todayEventsArray = Object.values(this.events)
      }, 500)
    }catch (e) {
      console.error(e)
    }
  }
}
