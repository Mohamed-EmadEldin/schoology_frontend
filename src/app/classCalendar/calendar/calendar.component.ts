import { Component, OnInit } from '@angular/core';
import {CalendarService} from "../../services/calendar.service";

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  constructor(public calendarService : CalendarService) { }

  events: any;
  eventsArray: any;

  ngOnInit(): void {
    try {
      this.calendarService.callApi()
      setTimeout(()=> {
        this.events = this.calendarService.getEvents()
        // this.eventsArray = Object.values(this.events)
        console.log(this.events)
      }, 500)
    }catch (e) {
      console.error(e)
    }
  }
}
