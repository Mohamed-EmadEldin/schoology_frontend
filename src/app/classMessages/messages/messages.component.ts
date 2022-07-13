import { TeachersService } from './../../services/teachers.service';
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
  {position: 2, name: 'Helium', sendMessage: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', sendMessage: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', sendMessage: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', sendMessage: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', sendMessage: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', sendMessage: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', sendMessage: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', sendMessage: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', sendMessage: 20.1797, symbol: 'Ne'},
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
