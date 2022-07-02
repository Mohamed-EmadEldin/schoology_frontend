import { Component, OnInit } from '@angular/core';
import {CalendarService} from "../../services/calendar.service";

@Component({
  selector: 'app-month',
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.css']
})
export class MonthComponent implements OnInit {

  selectedDate: Date = new Date();

  constructor(public calendarService: CalendarService) { }

  onSelectedDate() {
    this.calendarService.setSelectedDate({
      year: this.selectedDate.getFullYear(),
      month: this.selectedDate.getMonth() + 1,
      monthDay: this.selectedDate.getDate(),
      weekDay: this.selectedDate.getDay()
      //year-month-day
    })
  }

  ngOnInit(): void {
  }

}
