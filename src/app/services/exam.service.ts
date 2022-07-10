import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Exam} from "../models/exam";
import {StateService} from "./state.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ExamService {

  private exams: Object = []
  private readonly _all_url: string = ''
  private readonly _submit_results_url: string = `http://127.0.0.1:3000/exam/save`
  private readonly _create_exam_url: string = 'http://127.0.0.1:3000/exam/create'

  constructor(public http: HttpClient, public stateService: StateService) {
    this._all_url = `http://127.0.0.1:3000/exam/list/course/${this.stateService.getState().courseId}`

  }

  public apiGetDateExams(): Observable<any> {
    return this.http.get(this._all_url)


  }


  submitExamResults(link: string) {

  return this.http.post(this._submit_results_url,{
    link
  })
  }

  createExam(exam: Exam) {
  return this.http.post(this._create_exam_url,{...exam})
  }
}