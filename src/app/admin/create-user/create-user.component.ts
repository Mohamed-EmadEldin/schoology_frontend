import { Component } from '@angular/core';
import {UsersCrudService} from "../../services/admin/users-crud.service";
import {MessageService} from "primeng/api";
import {User} from "../../models/user";
import {ICourse, IUiClass} from "../../interfaces/Interfaces";
import {CourseCrudService} from "../../services/admin/course-crud.service";
import {ClassCrudService} from "../../services/admin/class-crud.service";
import {formatDate} from "@angular/common";
import {HelperService} from "../../services/admin/helper.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
  providers: [MessageService]
})
export class CreateUserComponent {

  user: User = new User();

  classes: IUiClass[] = []
  studentSelectedClass: number = -1
  teacherSelectedClasses: number[] = []


  courses: ICourse[] = []
  selectedCourse: number = -1

  students: any[] = []
  selectedStudent: number = -1

  studentBirthDate: string = ''

  studentGender = [{name: 'male', key: 1}, {name: 'female', key: 2}]
  selectedGender = ''

  confirmPassword :string = ''
  passwordMatch: boolean = false

  invalid: boolean = false; //to check inputs

  userTypes: any[] = [{name: 'Teacher', key: 1}, {name: 'Student', key: 2}, {name: 'Parent', key: 3}];
  userType: {name: string, key: number} = { name: '', key: 0 }
  maxDate: Date = new Date();


  constructor(private usersCrudService: UsersCrudService,
              private helperService: HelperService,
              private courseCrudService: CourseCrudService,
              private router: Router,
              private classCrudService: ClassCrudService,
              private messageService: MessageService) { }

  getClasses() {
    this.classCrudService.getClasses()
      .subscribe(data => {
        this.classes = data.map(value => {
          return {name: value.name, code: value.id}
        });
      })
  }

  getCourses() {
    this.courseCrudService.getCourses()
      .subscribe(data => {
        this.courses = data.map(value => {
          return {name: value.name, id: value.id}
        })
      })
  }

  getStudents() {
    this.usersCrudService.getAllStudents()
      .subscribe(data => {
        this.students = data.map(value => {
          return {name: value.name, id: value.id}
        })
      })
  }

  async getData() {
    if (this.userType.key === 1) {
      await this.getClasses()
      await this.getCourses()
    }else if (this.userType.key === 2) {
      await this.getClasses()
    }else if (this.userType.key === 3) {
      await this.getStudents()
    }
  }

  registerTeacher() {
    let body = {
      name: this.user.name,
      phone: this.user.phone,
      password: this.user.password,
      confirmPassword: this.confirmPassword,
      email: this.user.email,
      roleId: 1,
      classes: this.teacherSelectedClasses,
      courseId: this.selectedCourse
    }
    this.usersCrudService.registerTeacher(body).subscribe(() => {
      this.messageService.add({severity: 'success', summary: 'Success', detail: 'Teacher created successfully'})
    });
  }

  registerStudent() {
    this.studentBirthDate = formatDate(this.studentBirthDate, 'YYYY-MM-dd', 'en')
    let body = {
      name: this.user.name,
      phone: this.user.phone,
      password: this.user.password,
      confirmPassword: this.confirmPassword,
      email: this.user.email,
      roleId: 2,
      gender: this.selectedGender,
      classId: this.studentSelectedClass,
      birth_date: this.studentBirthDate
    }
    this.usersCrudService.registerStudent(body).subscribe(() => {
      this.messageService.add({severity: 'success', summary: 'Success', detail: 'Student created successfully'})
    });
  }

  registerParent() {
    let body = {
      name: this.user.name,
      phone: this.user.phone,
      password: this.user.password,
      email: this.user.email,
      roleId: 3,
      confirmPassword: this.confirmPassword,
      studentId: this.selectedStudent
    }
    console.log(body);
    this.usersCrudService.registerParent(body).subscribe(() => {
      this.messageService.add({severity: 'success', summary: 'Success', detail: 'Parent created successfully'})
    });
  }

  routeBack() {
    this.router.navigate(['/admin/user-crud']).catch((e) => {console.error(e)})
  }

  handelSubmit() {
    if (this.user !== new User()) {
      this.invalid = false;
      if (this.userType.key === 1) {
        this.registerTeacher()
        this.routeBack()
      }else if (this.userType.key === 2) {
        this.registerStudent()
        this.routeBack()
      }else if (this.userType.key === 3) {
        this.registerParent()
        this.routeBack()
      }
    }else {
      this.invalid = true;
    }
  }
}
