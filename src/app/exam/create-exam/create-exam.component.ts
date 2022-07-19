import { Component, OnInit } from '@angular/core';
import {Exam} from "../../models/exam";
import {StateService} from "../../services/state.service";
import {NgForm} from "@angular/forms";
import {IUiClass} from "../../interfaces/Interfaces";
import {ExamService} from "../../services/exam.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-exam',
  templateUrl: './create-exam.component.html',
  styleUrls: ['./create-exam.component.css']
})
export class CreateExamComponent implements OnInit {

  public exam:Exam
  public classes:IUiClass[] =[]
  constructor(public stateService:StateService , public examService:ExamService,public router:Router) {
    this.exam = new Exam()
    this.exam.courseId = this.stateService.getState().courseId
  }

  ngOnInit(): void {
    this.classes = this.stateService.mapClassesToUiRep()
  }

  handelSubmit(form: NgForm) {
    if(form.valid)
    {
      this.examService.createExam(this.exam).subscribe({
        next:res =>{
          console.log(res)
          this.router.navigate(['/teacher/list-quizzes'])
        }
      })
    }
  }
}
