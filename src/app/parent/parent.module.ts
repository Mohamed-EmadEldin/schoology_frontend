import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParentRoutingModule } from './parent-routing.module';
import { ParentComponent } from './parent.component';


@NgModule({
  declarations: [
    ParentComponent
  ],
  imports: [
    CommonModule,
    ParentRoutingModule
  ]
})
export class ParentModule { }
