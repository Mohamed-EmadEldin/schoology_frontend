import {Component, OnInit, ViewChild} from '@angular/core';
import {ExamService} from "../../services/exam.service";
import {Exam} from "../../models/exam";
import {Table} from "primeng/table";
import {formatDate} from "@angular/common";
import {Router} from "@angular/router";
import {MessageService} from "primeng/api";
import {GradesService} from "../../services/grades.service";

@Component({
  selector: 'app-classes-grades',
  templateUrl: './classes-grades.component.html',
  styleUrls: ['./classes-grades.component.css']
})
export class ClassesGradesComponent implements OnInit {

  public exams:any[]=[]
  filterDate: string = "";
  constructor(public gradesService:GradesService,public router:Router,private messageService :MessageService) { }

  ngOnInit(): void {
    this.gradesService.getAvailableGrades().subscribe({
      next:(data)=>{
        this.exams = data
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

}
