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
import {MatFormFieldModule} from "@angular/material/form-field";

@NgModule({
  declarations: [
    MessagesComponent,
    PopUpComponent
  ],
  imports: [
    CommonModule,
    MatPaginatorModule,
    RouterModule,
    MatTableModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
    MatFormFieldModule,
  ],
  providers: [
    {
      provide: MatDialogRef,
      useValue: {}
    },
  ],
  exports:[
    MessagesComponent,
    PopUpComponent,

  ]
})
export class MessagesModule { }
