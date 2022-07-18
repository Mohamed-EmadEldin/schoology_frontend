import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
    this.userName = JSON.parse(localStorage.getItem('state') as any)['userName'];
  }


  sendAnnouncement(message: any){
    console.log(message.value);
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
