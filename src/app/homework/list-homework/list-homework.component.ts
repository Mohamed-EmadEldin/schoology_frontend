import { Component, OnInit, ViewChild } from '@angular/core';
import {HomeworkService} from "../../services/homework.service";
import {Table} from "primeng/table";
import {HttpClient} from '@angular/common/http'
import {StateService} from "../../services/state.service";

@Component({
  selector: 'app-list-homework',
  templateUrl: './list-homework.component.html',
  styleUrls: ['./list-homework.component.css']
})
export class ListHomeworkComponent implements OnInit {

  allFiles = []

  constructor(private homeworkService :HomeworkService, private http: HttpClient,public stateService:StateService) { }

  async ngOnInit() {
     this.homeworkService.getAllFiles().subscribe({
       next:(data)=>{
         this.allFiles = Object.values(data)
         console.log(data)
       }
     })
  }

  @ViewChild('dt') dt: Table | undefined ;
  applyFilterNameGlobal($event: any, stringVal: string) {
    this.dt!.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }

   download(name: any) {
     console.log(name)
    this.http.get(`${this.homeworkService.url}/download/${name}`).subscribe(data => {
      const a = document.createElement('a');
      a.setAttribute('target', '_blank');
      // @ts-ignore
      let link = JSON.stringify(data).replaceAll('"','')
      console.log(link)
      this.http.get(link).subscribe({
        next:(res)=>{
          console.log(res)
        }
      })
      a.setAttribute('href', link);
      document.body.appendChild(a);
      a.click();
      a.remove();
    })
  }

}
