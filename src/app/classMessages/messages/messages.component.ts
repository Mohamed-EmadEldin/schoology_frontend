import { MessagesService } from '../../services/messages.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


import {Component, OnInit} from '@angular/core';
import { PopUpComponent } from '../pop-up/pop-up.component';

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
  displayedColumns: string[] = [  'position','SenderName', 'Student/Parent','class', 'Date', 'Contact'];
  mySource = ELEMENT_DATA;

  constructor(public dialog: MatDialog, private messagesService: MessagesService) {}

  openSendMsgDialog(user: any){
      const dialogRef = this.dialog.open(PopUpComponent, {
        width: '500px',
        data: {app: 'send', user},
      });
  }

  ngOnInit() {

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
