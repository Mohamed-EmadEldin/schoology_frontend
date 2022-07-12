import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {StateService} from "./state.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GradesService {

  private exams: Object = []
  private  _all_url: string = ''
  private readonly _available_grades_url: string = `http://127.0.0.1:3000/grades/list/available-grades`
  private readonly _students_grades_perExam_url: string = 'http://127.0.0.1:3000/grades/list/students-grades/'
  private readonly _my_grades_url: string = 'http://localhost:3000/grades/list/my-grades'

  constructor(public http: HttpClient, public stateService: StateService) {
    this._all_url = `http://127.0.0.1:3000/exam/list/teacher/${this.stateService.getState().userId}`
  }
  public getAvailableGrades() : Observable<any>
  {
   return this.http.get(this._available_grades_url)
  }
  public getGradesPerExam(id: string | null)
  {
    return this.http.get(`${this._students_grades_perExam_url+id}`)
  }
  public getMygrades()
  {
    return this.http.get(this._my_grades_url)

  }
}
