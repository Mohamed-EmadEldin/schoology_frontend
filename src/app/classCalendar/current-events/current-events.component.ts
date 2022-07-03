import {Component, Input, OnInit} from '@angular/core';
import {CalendarService} from "../../services/calendar.service";

@Component({
  selector: 'app-current-events',
  templateUrl: './current-events.component.html',
  styleUrls: ['./current-events.component.css']
})
export class CurrentEventsComponent implements OnInit {

  @Input() event: any;
  start: string = "";
  end: string = "";

  constructor(public calendarService: CalendarService) {
  }

  ngOnInit(): void {
    let period: number = this.event.period
    // @ts-ignore
    this.start = this.calendarService.periods[period].start
    // @ts-ignore
    this.end = this.calendarService.periods[period].end
  }

}
