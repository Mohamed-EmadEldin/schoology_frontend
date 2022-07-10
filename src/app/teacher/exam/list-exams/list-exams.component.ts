import {Component, OnInit, ViewChild} from '@angular/core';
import {ExamService} from "../../../services/exam.service";
import {Exam} from "../../../models/exam";
import {Table} from "primeng/table";
import {formatDate} from "@angular/common";

@Component({
  selector: 'app-list-exams',
  templateUrl: './list-exams.component.html',
  styleUrls: ['./list-exams.component.css']
})
export class ListExamsComponent implements OnInit {

  public exams:any[]=[]
  filterDate: string = "";
  constructor(public examService:ExamService) { }

  ngOnInit(): void {
   this.examService.apiGetDateExams().subscribe({
     next: (res) => {
       this.exams = res
       console.log(this.exams)
     },
     error:(error)=>{
       console.log(error)
     }
   })
  }
  @ViewChild('dt') dt: Table | undefined ;
  applyFilterNameGlobal($event: any, stringVal: any) {
    this.dt!.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }
  applyFilterClassGlobal($event: any, stringVal: any) {
    this.dt!.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }

  applyFilterDateGlobal(stringVal: string){
    let date =  formatDate(this.filterDate, 'yyyy-MM-dd', 'en')
    this.dt!.filterGlobal(date, stringVal)
  }

  clearDateFilter(){
    this.dt!.clear()
  }

  submitExamResults(link:string) {
    this.examService.submitExamResults(link).subscribe({
      next:()=>{

      }
    })
  }
}
