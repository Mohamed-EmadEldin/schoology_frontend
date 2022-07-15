import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { AdminRoutingModule } from '../admin-routing/admin-routing.module';
import { RegistrationComponent } from './registration/registration.component';
import { CoreModule } from '../core/core.module';
import { AdminRoutingModule } from './admin-routing.module';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    RegistrationComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule
  ]
})
export class AdminModule { }
