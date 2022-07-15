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
import { MessagesWindowComponent } from './messages-window/messages-window.component';
import {InputTextModule} from "primeng/inputtext";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {MatCardModule} from "@angular/material/card";


@NgModule({
  declarations: [
    MessagesComponent,
    PopUpComponent,
    MessagesWindowComponent,
  ],
  imports: [
    CommonModule,
    MatPaginatorModule,
    RouterModule,
    MatTableModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
    FormsModule,
    MatFormFieldModule,
    InputTextModule,
    ButtonModule,
    RippleModule,
    MatCardModule,
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
