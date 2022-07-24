import {Component, OnInit, ViewChild} from '@angular/core';
import {Table} from "primeng/table";
import {formatDate} from "@angular/common";
import {GradesService} from "../../services/grades.service";

@Component({
  selector: 'app-student-grades',
  templateUrl: './student-grades.component.html',
  styleUrls: ['./student-grades.component.css']
})
export class StudentGradesComponent implements OnInit {
  public grades:any=[]
  filterDate: string = "";
  constructor(private gradesService:GradesService) { }

  ngOnInit(): void {
    this.gradesService.getMygrades().subscribe({
      next:(res)=>{
        this.grades = res
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
