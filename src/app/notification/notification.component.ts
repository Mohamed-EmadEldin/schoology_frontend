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

   ngOnInit() {
     this.notificationService.getUserNotification().subscribe(data => this.notifications = data)

  }

  @ViewChild('dt') dt: Table | undefined ;
  applyFilterNameGlobal($event: any, stringVal: any) {
    this.dt!.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }

}
