import {Component, Input, OnInit} from '@angular/core';
import {CalendarService} from "../../services/calendar.service";
import {StateService} from "../../services/state.service";

@Component({
  selector: 'app-current-events',
  templateUrl: './current-events.component.html',
  styleUrls: ['./current-events.component.css']
})
export class CurrentEventsComponent implements OnInit {

  @Input() event: any;

  constructor(public stateService:StateService) {
  }

  ngOnInit(): void { }

}
