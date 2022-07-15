import { Component, OnInit } from '@angular/core';
import {StateService} from "../../services/state.service";

@Component({
  selector: 'app-messages-window',
  templateUrl: './messages-window.component.html',
  styleUrls: ['./messages-window.component.css']
})
export class MessagesWindowComponent implements OnInit {

  public myId:number=-1
  public messages:any = [
    {senderId:1,receiverId:2,message:"bla bla bla"},
    {senderId:2,receiverId:1,message:"bla bla bla"},
    {senderId:1,receiverId:2,message:"bla bla bla"},
    {senderId:1,receiverId:2,message:"bla bla bla"},
  ]

  constructor(public stateService:StateService) { }

  ngOnInit(): void {
    this.myId = this.stateService.getState().personId
    console.log(this.myId)
  }

}
