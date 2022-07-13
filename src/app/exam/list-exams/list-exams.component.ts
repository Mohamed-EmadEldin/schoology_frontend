import {Component, OnInit, ViewChild} from '@angular/core';
import {ExamService} from "../../services/exam.service";
import {Exam} from "../../models/exam";
import {Table} from "primeng/table";
import {formatDate} from "@angular/common";
import {Router} from "@angular/router";
import {MessageService} from "primeng/api";
import {StateService} from "../../services/state.service";

@Component({
  selector: 'app-list-exams',
  templateUrl: './list-exams.component.html',
  styleUrls: ['./list-exams.component.css']
})
export class ListExamsComponent implements OnInit {

  public exams:any[]=[]
  filterDate: string = "";
  constructor(public examService:ExamService,public router:Router,private messageService :MessageService , public stateService:StateService) { }

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
      next:(res)=>{
        console.log(res)
        if(!res.error) {
          this.router.routeReuseStrategy.shouldReuseRoute = () => false
          this.router.onSameUrlNavigation = 'reload'
          this.router.navigate(['/teacher/list-quizzes'])
        } else {
          this.messageService.add({severity: 'error', detail: res.error})
        }
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }
}
