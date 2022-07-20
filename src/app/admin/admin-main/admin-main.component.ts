import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-main',
  templateUrl: './admin-main.component.html',
  styleUrls: ['./admin-main.component.css']
})
export class AdminMainComponent implements OnInit {

  meetingCard = {
    header: "Meetings",
    subheader: "edit meetings",
    // image_src: "assets/images/cards/undraw_handcrafts_landscape.svg",
    image_src: "assets/images/cards/Remote-meeting-bro.svg",
    route: "/admin/meet-crud"
  }

  examsCard = {
    header: "Exams",
    subheader: "edit Exams",
    // image_src: "assets/images/cards/undraw_handcrafts_document.svg",
    image_src: "assets/images/cards/Exams-pana.svg",
    route: "/admin/exam-crud"
  }

  usersCard = {
    header: "Users",
    subheader: "edit Users",
    // image_src: "assets/images/cards/undraw_handcrafts_profile_info.svg",
    image_src: "assets/images/cards/users-crud.svg",
    route: "/admin/user-crud"
  }

  classesCard = {
    header: "Classes",
    subheader: "edit Classes",
    // image_src: "assets/images/cards/undraw_handcrafts_house.svg",
    image_src: "assets/images/cards/Teacher-amico.svg",
    route: "/admin/class-crud"
  };

  coursesCard = {
    header: "Courses",
    subheader: "edit Courses",
    // image_src: "assets/images/cards/undraw_handcrafts_book.svg",
    image_src: "assets/images/cards/Reading glasses-bro.svg",
    route: "/admin/course-crud"
  };

  dashboardCard = {
    header: "Dashboard",
    subheader: "edit Dashboards",
    image_src: "assets/images/cards/Visual-data-pana.svg",
    route: "/admin/dashboard"
  };


  constructor() { }

  ngOnInit(): void {
  }

}
