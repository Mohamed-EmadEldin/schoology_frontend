import { MessagesService } from '../../services/messages.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


import {Component, OnInit} from '@angular/core';
import { PopUpComponent } from '../pop-up/pop-up.component';
import {StateService} from "../../services/state.service";

export interface PeriodicElement {
  position:number;
  class:string;
  studentName: string;
  ParentName: string;
  sendMessage: string;
  receiveMessage:string;
}

export interface ITeacherMessages {
  position:number;
  class:string;
  senderName: string;
  date:string;
  senderType:string
}

let ELEMENT_DATA: any [] = [];

@Component({
    selector: 'table-pagination-example',
   templateUrl: './messages.component.html',
   styleUrls: ['./messages.component.css']
  })

export class MessagesComponent implements OnInit{
  displayedColumns: string[] = []
  mySource = ELEMENT_DATA;

  constructor(public dialog: MatDialog, private messagesService: MessagesService,public stateService:StateService) {}

  openSendMsgDialog(user: any){
    user['otherId'] = user.senderId
      const dialogRef = this.dialog.open(PopUpComponent, {
        width: '500px',
        data: {app: 'send', user},
      });
  }

  ngOnInit() {

      if(this.stateService.getState().userType === 'teacher')
      {
        this.displayedColumns=[ 'SenderName', 'Student/Parent','class', 'Date', 'Contact'];
      }
      else if (this.stateService.getState().userType === 'parent' || this.stateService.getState().userType === 'student')
      {
        this.displayedColumns=[  'teacher', 'course', 'Date', 'Contact'];

      }
    this.messagesService.getMyMessages().subscribe({
      next:(messages:any)=>{
        this.mySource = messages
        console.log(messages)
      }
    })

  }

  openRecievedMsgDialog(user: any){
    const dialogRef = this.dialog.open(PopUpComponent, {
      width: '500px',
      data: {app: 'recieve', user},
    });
  }

  applyFilter(event: any){

    console.log(event.target.value);
    this.messagesService.filter(event.target.value).subscribe((res: any) => {
      this.mySource = res;
    })

    // this.mySource = [
    //   {position: 1, class: 'Hydrogen',studentName:'Ahmed',ParentName:'Mohamed', sendMessage: 'send', receiveMessage: 'receive'},
    //   {position: 1, class: 'Hydrogen',studentName:'Ahmed',ParentName:'Mohamed', sendMessage: 'send', receiveMessage: 'receive'},
    //   {position: 1, class: 'Hydrogen',studentName:'Ahmed',ParentName:'Mohamed', sendMessage: 'send', receiveMessage: 'receive'},
    //   {position: 1, class: 'Hydrogen',studentName:'Ahmed',ParentName:'Mohamed', sendMessage: 'send', receiveMessage: 'receive'},
    //   {position: 1, class: 'Hydrogen',studentName:'Ahmed',ParentName:'Mohamed', sendMessage: 'send', receiveMessage: 'receive'},

    // ];
  }
}
