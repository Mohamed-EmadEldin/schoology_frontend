import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RouterModule} from "@angular/router";

import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {SidebarModule} from "primeng/sidebar";

import { NavComponent } from './nav/nav.component';
import { SidebarComponent } from './sidebar/sidebar.component';


@NgModule({
  declarations: [
    NavComponent,
    SidebarComponent,
  ],
  exports: [
    NavComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    RippleModule,
    SidebarModule,
    BrowserAnimationsModule,
    RouterModule,
  ]
})
export class CoreModule { }
