import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagesComponent } from '../messages/messages.component';
import { PopUpComponent } from './pop-up/pop-up.component';



@NgModule({
  declarations: [
    MessagesComponent,
    PopUpComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MessagesModule { }
