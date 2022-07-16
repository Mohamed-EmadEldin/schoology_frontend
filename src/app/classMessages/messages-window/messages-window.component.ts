import {Component, Input, OnInit} from '@angular/core';
import {StateService} from "../../services/state.service";
import {MessagesService} from "../../services/messages.service";

@Component({
  selector: 'app-messages-window',
  templateUrl: './messages-window.component.html',
  styleUrls: ['./messages-window.component.css']
})
export class MessagesWindowComponent implements OnInit {

  @Input() senderId: number = -1
  public myId: number = -1
  public messages: any = []

  constructor(public stateService: StateService, public messageService: MessagesService) {
  }

  ngOnInit(): void {
    this.myId = this.stateService.getState().personId
    this.messages = [
      {senderId: this.myId, receiverId: this.senderId, message: "bla bla bla"},
      {senderId: this.senderId, receiverId: this.myId, message: "bla bla bla"},
      {senderId: this.senderId, receiverId: 2, message: "bla bla bla"},
      {senderId: this.myId, receiverId: this.senderId, message: "bla bla bla"},
    ]
    console.log(this.senderId)
    this.messageService.getMessages(this.senderId).subscribe({
      next: (messages) => {
        console.log(messages)
        this.messages =messages
      }
    })
  }

}
