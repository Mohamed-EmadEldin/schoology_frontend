import { Component, OnInit, ViewChild } from '@angular/core';
import {HomeworkService} from "../../services/homework.service";
import {Table} from "primeng/table";
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-list-homework',
  templateUrl: './list-homework.component.html',
  styleUrls: ['./list-homework.component.css']
})
export class ListHomeworkComponent implements OnInit {

  allFiles = []

  constructor(private homeworkService :HomeworkService, private http: HttpClient) { }

  async ngOnInit() {
    await this.homeworkService.getAllFiles()
    setTimeout(()=>{
      this.allFiles = Object.values(this.homeworkService.getFileList())
      console.log(this.allFiles)
    },500)
  }

  @ViewChild('dt') dt: Table | undefined ;
  applyFilterNameGlobal($event: any, stringVal: string) {
    this.dt!.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }

  async download(name: any) {
    this.http.get(`${this.homeworkService.url}/download/${name}`).subscribe(data => {
      const a = document.createElement('a');
      a.setAttribute('target', '_blank');
      // @ts-ignore
      let link = JSON.stringify(data).replaceAll('"','')
      a.setAttribute('href', link);
      document.body.appendChild(a);
      a.click();
      a.remove();
    })
  }

}
