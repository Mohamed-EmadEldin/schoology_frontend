import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {formatDate} from "@angular/common";
import {Table} from "primeng/table";
import {StateService} from "../../services/state.service";

@Component({
  selector: 'app-upcoming-events',
  templateUrl: './upcoming-events.component.html',
  styleUrls: ['./upcoming-events.component.css']
})
export class UpcomingEventsComponent implements OnInit {

  @Input() events: any;
  filterDate: string = "";

  constructor(public stateService:StateService) { }

  @ViewChild('dt') dt: Table | undefined ;
  applyFilterNameGlobal($event: any, stringVal: any) {
    this.dt!.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }

  applyFilterDateGlobal(stringVal: string){
    let date =  formatDate(this.filterDate, 'yyyy-MM-dd', 'en')
    this.dt!.filterGlobal(date, stringVal)
  }

  clearDateFilter(){
    this.dt!.clear()
  }

  ngOnInit(): void { }

}
