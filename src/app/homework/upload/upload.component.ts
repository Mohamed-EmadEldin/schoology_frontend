import { Component, OnInit } from '@angular/core';
import {MessageService} from "primeng/api";
import {HomeworkService} from "../../services/homework.service";
import {IUiClass} from "../../Interfaces";
import {StateService} from "../../services/state.service";

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css'],
  providers: [MessageService]
})
export class UploadComponent implements OnInit {

  constructor(private homeworkService :HomeworkService, private messageService :MessageService,public stateService:StateService) { }

  file : File = null!;
  public classes:IUiClass[] =[]
  public _classId:number=-1

  ngOnInit(): void {
    this.classes = this.stateService.mapClassesToUiRep()

  }

  onChange($event: Event) {
    // @ts-ignore
    this.file = $event.target.files[0];
  }

  onUpload() {
    if (this.file && this._classId != -1 ){
      console.log(this.file)
      this.homeworkService.uploadFile(this.file,this._classId)
        .then(()=> {
          this.messageService.add({severity: 'info', detail: 'uploaded successfully'});
          // location.reload();
        })
        .catch(e => console.log(e))
      console.log(this._classId)
    }else {
      this.messageService.add({severity: 'error', detail: 'no files selected'});
      if(this._classId == -1)
        this.messageService.add({severity: 'error', detail: 'no class selected'});

    }
  }
}
