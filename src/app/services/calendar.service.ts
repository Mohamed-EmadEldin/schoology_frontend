import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {formatDate} from "@angular/common";
import axios from "axios";
import {StateService} from "./state.service";

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  private _today_url = "http://127.0.0.1:3000/meeting/my-meetings/"
  private _all_url = "http://127.0.0.1:3000/meeting/all-meetings/"


  role: string = ""
  selectedDate = formatDate(new Date(), 'shortDate', 'en')
  currentEvents: any;
  todayEvents: any;

  constructor(public http: HttpClient,public stateService:StateService) {
  }

  public apiGetDateEvents() {
    let url = this._all_url+this.stateService.getState().userId
    this.role = this.stateService.getState().userType
    let params = {
      "role": this.role,
    }

    this.http.get(url, {
      params: {...params}
    }).subscribe(data => this.currentEvents = data);
  }

  public apiGetTodayEvents() {
    let url = this._today_url+this.stateService.getState().userId
    this.role = this.stateService.getState().userType
    let date = new Date()
    let today : string = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`
    let params = {
      "role": this.role,
      "date": today
    }

    this.http.get(url, {
      params: {...params}
    }).subscribe(data => {
      this.todayEvents = data
    });
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
