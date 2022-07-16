import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminMainComponent} from "./admin-main/admin-main.component";
import {MeetingCrudComponent} from "./meeting-crud/meeting-crud.component";
import {ExamsCrudComponent} from "./exams-crud/exams-crud.component";
import {UsersCrudComponent} from "./users-crud/users-crud.component";
import {ClassCrudComponent} from "./class-crud/class-crud.component";

const routes: Routes = [
  { path: '', component: AdminMainComponent },
  { path: 'meet-crud', component: MeetingCrudComponent},
  { path: 'exam-crud', component: ExamsCrudComponent},
  { path: 'user-crud', component: UsersCrudComponent},
  { path: 'class-crud', component: ClassCrudComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
