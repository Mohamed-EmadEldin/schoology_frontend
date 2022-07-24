import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {StateService} from "./state.service";


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
    // this.userId = 1
    this.url = `http://127.0.0.1:3000/files`;
  }

  async uploadFile(file: File, classId: number) {
    let uploadeUrl = this.url +`/${this.stateService.getState().userId}`
    let formData = new FormData()
    formData.append("classId", classId.toString())
    formData.append("files", file)
    console.log(formData)
    this.http.post(`${uploadeUrl}/upload`, formData).subscribe(res => console.log(res))
  }

   getAllFiles() {
     return this.http.get<any>(`${this.url}/${this.stateService.getState().userType}/myFiles`)

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
