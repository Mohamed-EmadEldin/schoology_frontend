import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent implements OnInit {
  message: any = '';
  otherId:number=-1;
  senderName:string="";
  constructor(
    public dialogRef: MatDialogRef  <PopUpComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  ngOnInit(): void {
    this.otherId= this.data.user.senderId
    this.senderName= this.data.user.senderName
  }

  sendMsg(){
    console.log(this.message);
  }
}
