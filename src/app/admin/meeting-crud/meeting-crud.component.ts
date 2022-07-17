import {Component, OnInit, ViewChild} from '@angular/core';
import {Meeting} from "../../models/meeting";
import {ConfirmationService, MessageService} from "primeng/api";
import {MeetingCrudService} from "../../services/admin/meeting-crud.service";
import {Table} from "primeng/table";

@Component({
  selector: 'app-meeting-crud',
  templateUrl: './meeting-crud.component.html',
  styleUrls: ['./meeting-crud.component.css'],
  providers: [MessageService, ConfirmationService]
})
export class MeetingCrudComponent implements OnInit {

  _meetings: Meeting[] = []

  clonedItems: { [s: string]: any; } = {}; //to help restore row if update is cancelled

  displayCreateModel: boolean = false; //boolean to show create dialog on request

  selectedMeetings: Meeting[] = []

  constructor(private messageService: MessageService,
              private confirmationService: ConfirmationService,
              private meetingCrudService: MeetingCrudService) { }

  ngOnInit(): void {
    this.meetingCrudService.getMeetings()
      .subscribe(data => this._meetings = data)
  }

  onRowEditInit(_meeting: any) {
    this.clonedItems[_meeting.id] = {..._meeting};
  }

  onRowEditSave(_meeting: Meeting) {
    let index = _meeting.id;
    this.meetingCrudService.updateMeeting(index, _meeting)
      .subscribe(data => this._meetings.splice(index, 1, data))
      .unsubscribe();
    this.messageService.add({severity:'success', summary: 'Success', detail:'Class is updated'});
  }

  onRowEditCancel(_meeting: Meeting, index: any) {
    this._meetings[index] = this.clonedItems[_meeting.id];
    delete this.clonedItems[_meeting.id];
  }

  delete(_meeting: any) {
    this.confirmationService.confirm({
      message: `Are you sure you want to delete this meeting '${_meeting.name}' ?`,
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this._meetings = this._meetings.filter(val => val.classId !== _meeting.id);
        this.meetingCrudService.deleteMeet(_meeting.id)
          .subscribe(() => this._meetings.splice(_meeting.id,1))
        this.messageService.add({severity:'success', summary: 'Successful', detail: 'Meeting Deleted', life: 3000});
      }
    });
  }

  @ViewChild('dt') dt: Table | undefined
  applyFilterNameGlobal($event: any, stringVal: string) {
    this.dt!.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }
}
