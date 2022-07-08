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
  private _all_url: string = ''

  constructor(public http: HttpClient, public stateService: StateService) {
    this._all_url = `http://127.0.0.1:3000/exam/list/course/${this.stateService.getState().courseId}`
  }

  public apiGetDateExams() :Observable<any>
  {
     return this.http.get(this._all_url)


  }


}
