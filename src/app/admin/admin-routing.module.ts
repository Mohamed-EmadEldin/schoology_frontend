import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminMainComponent} from "./admin-main/admin-main.component";
import {MeetingCrudComponent} from "./meeting-crud/meeting-crud.component";
import {ExamsCrudComponent} from "./exams-crud/exams-crud.component";
import {UsersCrudComponent} from "./users-crud/users-crud.component";
import {ClassCrudComponent} from "./class-crud/class-crud.component";
import {CourseCrudComponent} from "./course-crud/course-crud.component";
import {CreateUserComponent} from "./create-user/create-user.component";

const routes: Routes = [
  { path: '', component: AdminMainComponent },
  { path: 'meet-crud', component: MeetingCrudComponent},
  { path: 'exam-crud', component: ExamsCrudComponent},
  { path: 'user-crud', component: UsersCrudComponent},
  { path: 'class-crud', component: ClassCrudComponent},
  { path: 'course-crud', component: CourseCrudComponent},
  { path: 'create-user', component: CreateUserComponent },
  { path: 'dashboard',component:DashboardComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
