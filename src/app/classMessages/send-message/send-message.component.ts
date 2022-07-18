import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {MessagesService} from "../../services/messages.service";
import {PopUpComponent} from "../pop-up/pop-up.component";
import {StateService} from "../../services/state.service";
import {IUiClass} from "../../meeting/create-meeting/create-meeting.component";
import {MatTableDataSource} from "@angular/material/table";

let ELEMENT_DATA: any [] = [];

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.css']
})
export class SendMessageComponent implements OnInit {

  displayedColumns: string[] = [];
  mySource: MatTableDataSource<any> = new MatTableDataSource<any>();
  selectedClass: any;
  public classes: IUiClass[] = []

  constructor(public dialog: MatDialog, private appMessagesService: MessagesService, public stateService: StateService) {
  }

  openSendMsgDialogWithParent(user: any) {
    user['otherId'] = user.parentId
    const dialogRef = this.dialog.open(PopUpComponent, {
      width: '500px',
      data: {app: 'send', user},
    });
  }


  openSendMsgDialogWithStudent(user: any) {
    user['otherId'] = user.studentId
    console.log(user)
    const dialogRef = this.dialog.open(PopUpComponent, {
      width: '500px',
      data: {app: 'send', user},
    });
  }

  openSendMsgDialogWithTeacher(user: any) {
    user['otherId'] = user.teacherId
    const dialogRef = this.dialog.open(PopUpComponent, {
      width: '500px',
      data: {app: 'send', user},
    });
  }

  ngOnInit(): void {
    if (this.stateService.getState().userType === 'teacher') {
      this.displayedColumns = ['position', 'studentName', 'parentName', 'class', 'contactStudent', 'contactParent'];
      this.classes = this.stateService.mapClassesToUiRep()

      this.mySource.filterPredicate = function (record, filter) {
        console.log(filter)
        return record.toLocaleLowerCase() == filter.toLocaleLowerCase();
      }
    } else if (this.stateService.getState().userType === 'parent' || this.stateService.getState().userType === 'student') {
      this.displayedColumns = ['position', 'teacherName', 'course', 'contactTeacher'];

    }

    this.appMessagesService.getMyPossibleReceivers().subscribe({
      next: (data) => {
        this.mySource = new MatTableDataSource<any>(data)
        console.log(this.mySource)
      }
    })
  }

  applyFilter(event: any) {
    let selectedClass = event.value
    console.log(selectedClass)
    this.mySource.filter = selectedClass.trim().toLowerCase();
    console.log(this.mySource)

  }
}
