import { TeachersService } from '../../services/teachers.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


import { Component, OnInit } from '@angular/core';
import { PopUpComponent } from '../pop-up/pop-up.component';

export interface PeriodicElement {
  name: string;
  position: number;
  sendMessage: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', sendMessage: 1.0079, symbol: 'H'},

];

@Component({
    selector: 'table-pagination-example',
   templateUrl: './messages.component.html',
   styleUrls: ['./messages.component.css']
  })

export class MessagesComponent implements OnInit{
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  mySource = ELEMENT_DATA;
  constructor(public dialog: MatDialog, private teachersService: TeachersService) {}


  ngOnInit(){
    this.teachersService.getTeachers().subscribe( (teachers: any) => {
      this.mySource = teachers;
    })

  }

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
}
