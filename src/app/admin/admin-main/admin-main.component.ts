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
    image_src: "assets/images/cards/undraw_handcrafts_landscape.svg",
    route: "/admin/meet-crud"
  }

  examsCard = {
    header: "Exams",
    subheader: "edit Exams",
    image_src: "assets/images/cards/undraw_handcrafts_document.svg",
    route: "/admin/exam-crud"
  }

  usersCard = {
    header: "Users",
    subheader: "edit Users",
    image_src: "assets/images/cards/undraw_handcrafts_profile_info.svg",
    route: "/admin/user-crud"
  }

  classesCard = {
    header: "Classes",
    subheader: "edit Classes",
    image_src: "assets/images/cards/undraw_handcrafts_house.svg",
    route: "/admin/class-crud"
  };

  coursesCard = {
    header: "Courses",
    subheader: "edit Courses",
    image_src: "assets/images/cards/undraw_handcrafts_book.svg",
    route: "/admin/course-crud"
  };


  constructor() { }

  ngOnInit(): void {
  }

}
