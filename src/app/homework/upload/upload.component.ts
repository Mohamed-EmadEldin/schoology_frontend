import { Component, OnInit } from '@angular/core';
import {MessageService} from "primeng/api";
import {HomeworkService} from "../../services/homework.service";

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css'],
  providers: [MessageService]
})
export class UploadComponent implements OnInit {

  constructor(private homeworkService :HomeworkService, private messageService :MessageService) { }

  inputValue: string = '';
  uploadedFiles: any[] = []

  ngOnInit(): void { }

  onUpload($event: any) {
    for(let file of $event.files) {
      this.uploadedFiles.push(file);
      console.log(this.uploadedFiles)
    }

    this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
  }

  selected() {
    console.log(this.uploadedFiles)
  }

  upload() {
    console.log('from upload')
  }

}
