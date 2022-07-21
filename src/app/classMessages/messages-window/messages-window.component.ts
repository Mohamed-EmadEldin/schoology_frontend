import {Component, Input, OnInit} from '@angular/core';
import {StateService} from "../../services/state.service";
import {MessagesService} from "../../services/messages.service";
import {Message} from "../../models/Message";
import {MessageService} from "primeng/api";

class UiMessage{
  constructor(public senderId=-1,public receiverId=-1,public message='',public sender:any) {

  }

}

@Component({
  selector: 'app-messages-window',
  templateUrl: './messages-window.component.html',
  styleUrls: ['./messages-window.component.css']
})

export class MessagesWindowComponent implements OnInit {

  @Input() otherId: number = -1
  @Input() senderName:string = ""
  public myId: number = -1
  public messages: any = []
  public newMessage:any =""

  constructor(public stateService: StateService, public appMessageService: MessagesService,private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.myId = this.stateService.getState().personId
    console.log(this.otherId)
    this.appMessageService.getMessages(this.otherId).subscribe({
      next: (messages) => {
        this.messages =messages
        console.log(messages)
      }
    })
  }

  sendMessage() {
    let message = new Message(this.newMessage,this.otherId)
    console.log(message)
    this.appMessageService.sendMessages(message).subscribe({next:(message)=>{
        this.messages.push(message)
        this.messageService.add({severity:'success', summary:'Success', detail:`your message has been sent`});

      },
      error:()=>{
        this.messageService.add({severity:'error', summary:'Error', detail:'Your message has not been sent !!'})
      }
    })
    // this.messages.push(new UiMessage(this.myId,this.otherId,this.newMessage,{name:this.stateService.getState().userName}))

  }
}
