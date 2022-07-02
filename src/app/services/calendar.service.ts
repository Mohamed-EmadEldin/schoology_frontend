import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {formatDate} from "@angular/common";
import axios from "axios";

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  private url = "http://127.0.0.1:3000/meeeting/my-meetings/1"

  selectedDate: string;
  currentEvents: any;

  constructor(public http: HttpClient) {
    this.selectedDate = formatDate(new Date(), 'shortDate', 'en')
  }

  public callApi() {
    let body = {
      role: "teacher",
      date: this.selectedDate
    }

    axios.get(this.url, {
      params: {
        ...body
      }
    }).then(data => {
      console.log(data)
      this.currentEvents = data
    })
  }

  public callApiH() {
    let body = {
      "role": "teacher",
      "date": this.selectedDate
    }

    this.http.get(this.url, {
      headers: {},
      params: {...body}
    }).subscribe(data => this.currentEvents = data);
  }

  public getEvents() {
    return this.currentEvents;
  }

  getSelectedDate() {
    return this.selectedDate
  }

  setSelectedDate(date: any) {
    this.selectedDate = date;
  }

}
