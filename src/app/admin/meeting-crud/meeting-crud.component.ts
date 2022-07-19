import {Component, OnInit, ViewChild} from '@angular/core';
import {Meeting} from "../../models/meeting";
import {ConfirmationService, MessageService} from "primeng/api";
import {MeetingCrudService} from "../../services/admin/meeting-crud.service";
import {Table} from "primeng/table";
import {ICourse, ITeacher, IUiClass} from "../../interfaces/Interfaces";
import {HelperService} from "../../services/admin/helper.service";
import {formatDate} from "@angular/common";

@Component({
  selector: 'app-meeting-crud',
  templateUrl: './meeting-crud.component.html',
  styleUrls: ['./meeting-crud.component.css'],
  providers: [MessageService, ConfirmationService]
})
export class MeetingCrudComponent implements OnInit {

  _meetings: Meeting[] = []

  _meeting: Meeting = new Meeting()

  teachers: ITeacher[] = []
  selectedTeacherId: number = -1

  teacherClasses: IUiClass[] = []
  selectedClass: number = -1

  teacherCourses: ICourse[] = []
  selectedCourse: number = -1

  disableClassSelect: boolean = true;
  disableCourseSelect: boolean = true;
  isTeacherHasClasses: boolean = false;
  isTeacherSelected: boolean = false;

  invalid: boolean = false; //check create form status

  clonedItems: { [s: string]: any; } = {}; //to help restore row if update is cancelled

  displayCreateModel: boolean = false; //boolean to show create dialog on request

  selectedMeetings: Meeting[] = []

  constructor(private meetingCrudService: MeetingCrudService,
              private helperService: HelperService,
              private messageService: MessageService,
              private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
    this.meetingCrudService.getMeetings()
      .subscribe(data => this._meetings = data)
  }

  openCreateDialog() {
    this.helperService.getAllTeachers().subscribe(data => {
      this.teachers = data.map(value => {
        return {name: value.name, id: value.id}
      });
    })
    this.displayCreateModel = true;
  }

  getClasses(teacherId: number) {
    this.helperService.getTeacherClasses(teacherId).subscribe(data => {
      this.teacherClasses = data.map(value => {
        return {name: value.name, code: value.id}
      });
    });
  }

  getCourses(teacherId: number) {
    this.helperService.getTeacherCourse(teacherId).subscribe(data => {
      this.teacherCourses = data.map(value => {
        return {name: value.name, id: value.id}
      });
    });
  }

  async activateCourseAndClassDropdown(teacherId: number) {
    await this.getClasses(teacherId)
    await this.getCourses(teacherId)
    this.isTeacherHasClasses = true;
    this.disableClassSelect = false;
    this.disableCourseSelect = false;
    this.isTeacherSelected = true;
  }

  createMeeting() { //TODO: check admin create meeting
    this.invalid = false
    this._meeting.date = formatDate(this._meeting.date, 'YYYY-MM-dd', 'en')
    this.meetingCrudService.createMeeting({
      ...this._meeting,
      teacherId: this.selectedTeacherId,
      classId: this.selectedClass,
      courseId: this.selectedCourse,
    })
    this.displayCreateModel = false;
    this.messageService.add({severity: 'success', summary: 'Success', detail: 'Exam was created successfully'});
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
          .subscribe(() => {
            this._meetings.splice(_meeting.id, 1);
            this.messageService.add({severity:'success', summary: 'Successful', detail: 'Meeting Deleted', life: 3000});
          })
      }
    });
  }

  @ViewChild('dt') dt: Table | undefined
  applyFilterNameGlobal($event: any, stringVal: string) {
    this.dt!.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }

  deleteSelectedMeetings() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected Meetings?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this._meetings = this._meetings.filter(val => !this.selectedMeetings.includes(val));
        this.selectedMeetings = [];
        this.messageService.add({severity:'success', summary: 'Successful', detail: 'users deactivated', life: 3000});
      }
    });
  }
}
