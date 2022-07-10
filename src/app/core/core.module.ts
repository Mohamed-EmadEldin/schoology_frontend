import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RouterModule} from "@angular/router";
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import{MatMenuModule} from '@angular/material/menu';

import {SidebarModule} from "primeng/sidebar";

import { NavComponent } from './nav/nav.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LoginComponent } from './login/login.component';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {CheckboxModule} from 'primeng/checkbox';
import {RadioButtonModule} from 'primeng/radiobutton';
import {RippleModule} from 'primeng/ripple';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MessagesModule} from "primeng/messages";
import {MessageService} from 'primeng/api';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';



@NgModule({
  declarations: [
    NavComponent,
    SidebarComponent,
    LoginComponent,
    UnauthorizedComponent,

  ],
  exports: [
    NavComponent,
    SidebarComponent,

  ],
    imports: [
        CommonModule,
        ButtonModule,
        RippleModule,
        SidebarModule,
        BrowserAnimationsModule,
        RouterModule,
        InputTextModule,
        CheckboxModule,
        ButtonModule,
        RadioButtonModule,
        RippleModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        MessagesModule,
      MatButtonModule,
      MatIconModule,
      MatMenuModule,

    ],
  providers:[MessageService]
})
export class CoreModule { }
