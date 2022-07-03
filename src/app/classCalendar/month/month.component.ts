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
    let dayFormat: string = `${this.selectedDate.getFullYear()}-${this.selectedDate.getMonth()+1}-${this.selectedDate.getDate()}`
    this.calendarService.setSelectedDate(dayFormat)
  }

  ngOnInit(): void {
  }

}
