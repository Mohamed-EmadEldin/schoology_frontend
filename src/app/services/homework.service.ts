import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {StateService} from "./state.service";
// import * as path from "path";


@Injectable({
  providedIn: 'root'
})
export class HomeworkService {

  readonly userId: number = -1;
  readonly url: string;
  private fileList = {}
  private myFiles = {}

  constructor(private http: HttpClient, private stateService: StateService) {
    if(stateService.getState().userId != -1){
      this.userId = stateService.getState().userId
    }
    //TODO: [ph]
    this.userId = 1
    this.url = `http://127.0.0.1:3000/files/${this.userId}`;
  }

  async uploadFile(file: string, Fpath: string) {
    this.http.post(`${this.url}/upload`, {
      // 'file': path.join(Fpath, file)
    }).subscribe(res => console.log(res))
  }

  async getAllFiles() {
    this.http.get(`${this.url}/allFiles`)
      .subscribe(data => this.fileList = data)
  }

  getFileList() {
    return this.fileList
  }

  async downloadFile(name: string) {
    await this.http.get(`${this.url}/download/${name}`)
    //   .subscribe(data => {
    //   return data;
    // })
  }

  async getMyFiles() {
    this.http.get(`${this.url}/myFiles`)
      .subscribe(data => this.myFiles = data)
  }

}
