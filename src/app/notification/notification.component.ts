import {Component, OnInit, ViewChild} from '@angular/core';
import {NotificationService} from "../services/notification.service";
import {Table} from "primeng/table";

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  notifications = [];

  constructor(private notificationService: NotificationService) { }

  async ngOnInit() {
    await this.notificationService.getUserNotification()
    setTimeout(()=>{
      this.notifications = Object.values(this.notificationService.getNotifications())
      console.log(this.notifications)
    }, 500)
  }

  @ViewChild('dt') dt: Table | undefined ;
  applyFilterNameGlobal($event: any, stringVal: any) {
    this.dt!.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }

}
