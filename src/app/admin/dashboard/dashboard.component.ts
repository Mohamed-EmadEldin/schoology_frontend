import { Component, OnInit } from '@angular/core';
import {Announcement} from "../../models/announcement";
import {DashboardService} from "../../services/admin/dashboard.service";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userName: any;
  shortLink: string = "";
  loading: boolean = false;
  schoolsFilesArray: any[] = [];
  eventsFilesArray: any[] = [];
  newAnnouncement: Announcement= new Announcement()

  constructor(
    private dashBoardService:DashboardService,
    private messageService:MessageService
  ) { }

  ngOnInit(): void {
    this.userName = JSON.parse(localStorage.getItem('state') as any)['userName'];
  }


  sendAnnouncement(){
    this.dashBoardService.sendAnnouncement(this.newAnnouncement).subscribe({
      next:()=>{
        this.newAnnouncement.announcment = ''
        this.messageService.add({severity:'success', summary:'Success', detail:`New announcement has been published `});

      },
      error:()=>{
        this.messageService.add({severity:'error', summary:'Error', detail:'Error has happen'})

      }
    })
  }

  onChangeSchools(event: any) {
        const files = event.target.files;

        for(let file of files){

          const reader = new FileReader();
          reader.readAsDataURL(file);

          reader.addEventListener('load', (e) => {
            const data = e.target?.result;
            this.schoolsFilesArray.push(data)
          })
        }
    }


    onChangeEvents(event: any) {
      const files = event.target.files;

      for(let file of files){

        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.addEventListener('load', (e) => {
          const data = e.target?.result;
          this.eventsFilesArray.push(data)
        })
      }
  }

    removeSchoolImg(index: number){
      this.schoolsFilesArray.splice(index, 1)
    }

    removeEventsImg(index: number){
      this.eventsFilesArray.splice(index, 1)
    }
}
