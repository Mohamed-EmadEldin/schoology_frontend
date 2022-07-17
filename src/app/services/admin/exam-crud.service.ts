import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Exam} from "../../models/exam";

@Injectable({
  providedIn: 'root'
})
export class ExamCrudService {

  private url = 'http://127.0.0.1:3000/exam';

  constructor(private http: HttpClient) { }

  getExams() {
    return this.http.get<Exam[]>(`${this.url}/list`)
  }

  createExam(exam: Exam) {
    return this.http.post(`${this.url}/create`, exam)
  }

  updateExam(examId: number, exam: Exam){
    return this.http.put<Exam>(`${this.url}/${examId}`, exam)
  }

  deleteExam(examId: number) {
    return this.http.delete(`${this.url}/${examId}`)
  }

}
