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
      this.calendarService.apiGetTodayEvents()
      this.calendarService.apiGetDateEvents()
      setTimeout(()=> {
        this.events = this.calendarService.getDateEvents()
        this.dateEventsArray = Object.values(this.events)
        this.events = this.calendarService.getTodayEvents()
        this.todayEventsArray = Object.values(this.events)
        console.log(this.todayEventsArray)
      }, 1000)
    }catch (e) {
      console.error(e)
    }
  }
}
