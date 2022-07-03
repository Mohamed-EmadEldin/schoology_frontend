import {Component, Input, OnInit} from '@angular/core';
import {CalendarService} from "../../services/calendar.service";

@Component({
  selector: 'app-upcoming-events',
  templateUrl: './upcoming-events.component.html',
  styleUrls: ['./upcoming-events.component.css']
})
export class UpcomingEventsComponent implements OnInit {

  @Input() event: any;
  start :string = ""
  end :string = ""

  constructor(public calendarService: CalendarService) { }

  ngOnInit(): void {
    let period: number = this.event.period
    // @ts-ignore
    this.start = this.calendarService.periods[period].start
    // @ts-ignore
    this.end = this.calendarService.periods[period].end
  }

}
