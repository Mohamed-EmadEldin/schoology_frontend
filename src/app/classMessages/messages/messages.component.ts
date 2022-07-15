import { MessagesService } from '../../services/messages.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


import {Component} from '@angular/core';
import { PopUpComponent } from '../pop-up/pop-up.component';

export interface PeriodicElement {
  position:number;
  class:string;
  studentName: string;
  ParentName: string;
  sendMessage: string;
  receiveMessage:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, class: 'Hydrogen',studentName:'Ahmed',ParentName:'Mohamed', sendMessage: 'send', receiveMessage: 'receive'},

];

@Component({
    selector: 'table-pagination-example',
   templateUrl: './messages.component.html',
   styleUrls: ['./messages.component.css']
  })

export class MessagesComponent {
  displayedColumns: string[] = [  'position','studentName', 'class', 'ParentName', 'sendMessage', 'receiveMessage'];
  mySource = ELEMENT_DATA;
  constructor(public dialog: MatDialog, private messagesService: MessagesService) {}

  openSendMsgDialog(user: any){
      const dialogRef = this.dialog.open(PopUpComponent, {
        width: '500px',
        data: {app: 'send', user},
      });
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
