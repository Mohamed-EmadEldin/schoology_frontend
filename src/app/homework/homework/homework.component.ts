import { Component, OnInit } from '@angular/core';
import {StateService} from "../../services/state.service";

@Component({
  selector: 'app-homework',
  templateUrl: './homework.component.html',
  styleUrls: ['./homework.component.css']
})
export class HomeworkComponent implements OnInit {

  constructor(public stateService:StateService) { }

  ngOnInit(): void {
  }

}
