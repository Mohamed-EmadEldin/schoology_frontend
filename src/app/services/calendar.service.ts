import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {formatDate} from "@angular/common";
import axios from "axios";

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  private url = "http://127.0.0.1:3000/meeting/my-meetings/1"

  public periods = {
    1: {
      start: "08:00",
      end: "10:00"
    },
    2: {
      start: "10:30",
      end: "12:30"
    },
    3: {
      start: "13:00",
      end: "15:00"
    },
    4: {
      start: "15:30",
      end: "17:30"
    },
  }

  role: string = "teacher"
  selectedDate = formatDate(new Date(), 'shortDate', 'en')
  currentEvents: any;
  todayEvents: any;

  constructor(public http: HttpClient) { }

  public apiGetDateEvents() {
    let params = {
      "role": this.role,
      "date": this.selectedDate
    }

    this.http.get(this.url, {
      params: {...params}
    }).subscribe(data => this.currentEvents = data);
  }

  public apiGetTodayEvents() {
    let date = new Date()
    let today : string = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`
    let params = {
      "role": this.role,
      "date": today
    }

    this.http.get(this.url, {
      params: {...params}
    }).subscribe(data => this.todayEvents = data);
  }

  public getDateEvents() {
    return this.currentEvents;
  }

  public getTodayEvents() {
    return this.todayEvents;
  }

  getSelectedDate() {
    return this.selectedDate
  }

  setSelectedDate(date: any) {
    this.selectedDate = date;
  }

}
