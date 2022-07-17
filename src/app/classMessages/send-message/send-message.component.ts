import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {MessagesService} from "../../services/messages.service";
import {PopUpComponent} from "../pop-up/pop-up.component";
import {StateService} from "../../services/state.service";

let ELEMENT_DATA: any [] = [];

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.css']
})
export class SendMessageComponent implements OnInit {

  displayedColumns: string[] = [ ];
  mySource:any[] = [];

  constructor(public dialog: MatDialog, private appMessagesService: MessagesService,public stateService:StateService) {}

  openSendMsgDialogWithParent(user: any){
    user['otherId'] = user.parentId
    const dialogRef = this.dialog.open(PopUpComponent, {
      width: '500px',
      data: {app: 'send', user},
    });
  }


  openSendMsgDialogWithStudent(user: any){
    user['otherId'] = user.studentId
    console.log(user)
    const dialogRef = this.dialog.open(PopUpComponent, {
      width: '500px',
      data: {app: 'send', user},
    });
  }

  openSendMsgDialogWithTeacher(user: any){
    user['otherId'] = user.teacherId
    const dialogRef = this.dialog.open(PopUpComponent, {
      width: '500px',
      data: {app: 'send', user},
    });
  }
  ngOnInit(): void {
    if(this.stateService.getState().userType === 'teacher')
    {
      this.displayedColumns=['position','studentName', 'parentName','class', 'contactStudent', 'contactParent'];
    }
    else if(this.stateService.getState().userType === 'parent' || this.stateService.getState().userType === 'student')
    {
      this.displayedColumns=['position','teacherName', 'course', 'contactTeacher'];

    }

    this.appMessagesService.getMyPossibleReceivers().subscribe({
      next:(data)=>{
        this.mySource=data
        console.log(this.mySource)
      }
    })
  }

  applyFilter(event: any) {

    console.log(event.target.value);
    this.appMessagesService.filter(event.target.value).subscribe((res: any) => {
      this.mySource = res;
    })
  }
}
