import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


import {Component} from '@angular/core';
import { PopUpComponent } from '../pop-up/pop-up.component';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
    selector: 'table-pagination-example',
   templateUrl: './messages.component.html',
   styleUrls: ['./messages.component.css']
  })

export class MessagesComponent {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  mySource = ELEMENT_DATA;
  constructor(public dialog: MatDialog) {}

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
