import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoreModule } from "./core/core.module";
import {RouterModule} from "@angular/router";
import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './core/not-found/not-found.component';
import {ClassCalendarModule} from "./classCalendar/classCalendar.module";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
    imports: [
        HttpClientModule,
        BrowserModule,
        CoreModule,
        ClassCalendarModule,
        RouterModule,
        AppRoutingModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
