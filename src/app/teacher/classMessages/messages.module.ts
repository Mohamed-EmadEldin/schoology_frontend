import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagesComponent } from './messages/messages.component';
import { PopUpComponent } from './pop-up/pop-up.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import {RouterModule} from "@angular/router";


import { MatTableModule } from '@angular/material/table'

import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';

import {MatInputModule} from '@angular/material/input';


@NgModule({
  declarations: [
    MessagesComponent,
    PopUpComponent,

  ],
  imports: [
    CommonModule,
    MatPaginatorModule,
    RouterModule,
    MatTableModule,
    MatDialogModule,
    MatInputModule,
    FormsModule
  ],
  exports:[
  MessagesComponent,
  ],
  providers: [
    {
      provide: MatDialogRef,
      useValue: {}
    },
  ]
})
export class MessagesModule { }
