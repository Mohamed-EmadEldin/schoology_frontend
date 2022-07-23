import {Component, OnInit} from '@angular/core';
import {StateService} from "../../services/state.service";
import {MeetingAuthService} from "../../services/meeting-auth.service";
import {FormControl, FormGroup, NgForm, NgModel, Validators} from "@angular/forms";
import {Meeting} from "../../models/meeting";
import {formatDate} from '@angular/common';
import {IUiClass} from "../../interfaces/Interfaces";
import {MessageService} from "primeng/api";


@Component({
  selector: 'app-create-meeting',
  templateUrl: './create-meeting.component.html',
  styleUrls: ['./create-meeting.component.css']
})
export class CreateMeetingComponent implements OnInit {
  // date_time:"2020-01-01",
  // period:3,
  // name:"meeting1",
  // teacherId:1,
  // classId:1,
  // courseId:1,
  // description:"math lesson 1 ",
  // @ts-ignore
  // selectedClass:IClass;
  classes: IUiClass[] = []

  minDate: Date = new Date();

  // @ts-ignore
  // date_time: Date;
  // description: any;
  // name:string=""
  // period:any
  // @ts-ignore
  meeting: Meeting = new Meeting()
  createMeetingForm = new FormGroup({
    description: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
    name: new FormControl('', [
        Validators.required
      ]
    ),
    date: new FormControl(new Date(), Validators.required),
    period: new FormControl(null, Validators.required),
    classId: new FormControl(null, Validators.required)
  });


  constructor(private stateService: StateService, private meetingAuthService: MeetingAuthService, public messageService: MessageService) {

  }

  ngOnInit(): void {
    this.classes = this.stateService.mapClassesToUiRep()
  }

  printClass() {
    // console.log(this.selectedClass)
  }

  signInWithGoogle(formData: object): void {
    this.meetingAuthService.createMeet(formData);
  }

  handelSubmit(form: NgForm) {
    if (form.valid) {
      form.value.date = formatDate(form.value.date, 'YYYY-MM-dd', 'en')
      console.log(form)
      this.meetingAuthService.checkIsValidTime(form.value).subscribe({
        next: (res) => {
          if (res.error) {
            this.messageService.add({severity: 'error', summary: 'Error', detail: res.error});
          } else {

            this.signInWithGoogle(form.value)

          }
        }
      })

    }
  }
}
