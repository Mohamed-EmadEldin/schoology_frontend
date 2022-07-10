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

  file : File = null!;

  ngOnInit(): void { }

  onChange($event: Event) {
    // @ts-ignore
    this.file = $event.target.files[0];
  }

  onUpload() {
    if (this.file){
      console.log(this.file)
      this.homeworkService.uploadFile(this.file)
        .then(()=> {
          this.messageService.add({severity: 'info', detail: 'uploaded successfully'});
          location.reload();
        })
        .catch(e => console.log(e))
    }else {
      this.messageService.add({severity: 'error', detail: 'no files selected'});
    }
  }
}
