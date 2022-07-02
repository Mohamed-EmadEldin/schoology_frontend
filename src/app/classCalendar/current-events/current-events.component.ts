import {Component, Input, OnInit} from '@angular/core';
import {CalendarService} from "../../services/calendar.service";

@Component({
  selector: 'app-current-events',
  templateUrl: './current-events.component.html',
  styleUrls: ['./current-events.component.css']
})
export class CurrentEventsComponent implements OnInit {

  selectedDate: any;

  @Input() event: any;

  constructor(public calendarService: CalendarService) {
    this.selectedDate = calendarService.getSelectedDate();
  }

  ngOnInit(): void {
    console.log(this.event)
  }

}
