import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Table} from "primeng/table";
import {formatDate} from "@angular/common";
import {GradesService} from "../../services/grades.service";

@Component({
  selector: 'app-students-grades',
  templateUrl: './students-grades.component.html',
  styleUrls: ['./students-grades.component.css']
})
export class StudentsGradesComponent implements OnInit {
  public id:string | null  = '-1'
  public grades:any=[]
  filterDate: string = "";
  constructor( private route:ActivatedRoute,public gradesService:GradesService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
    this.gradesService.getGradesPerExam(this.id).subscribe({
      next:(res)=>{
        this.grades =res
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
