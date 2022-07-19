import {StudentService} from './../../services/students.service';
import {TeachersService} from './../../services/teachers.service';
import {Validators} from '@angular/forms';
import {FormGroup} from '@angular/forms';
import {FormBuilder} from '@angular/forms';
import {Component, OnInit} from '@angular/core';
import {IUiClass} from "../../interfaces/Interfaces";
import {ClassCrudService} from "../../services/admin/class-crud.service";
import {ClassRoom} from "../../models/classRoom";
import {CourseCrudService} from "../../services/admin/course-crud.service";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registrationForm!: FormGroup;
  student: boolean = false;
  teacher: boolean = false;
  parent: boolean = false;
  classRooms: any[] = [];
  courses: any[] = []

  constructor(public fb: FormBuilder,
              private teachersService: TeachersService,
              private studentService: StudentService,
              private class_crud_service: ClassCrudService,
              private course_crud_service: CourseCrudService) {
  }

  ngOnInit(): void {
    this.initForm();
    this.class_crud_service.getClasses().subscribe({
      next: (classes) => {
        this.classRooms = classes
        console.log(this.classRooms)
      }
    })
    this.course_crud_service.getCourses().subscribe({
      next: (courses) => {
        this.courses =courses
      }
    })
    this.registrationForm.get('roleId')?.valueChanges.subscribe(data => {
      if (data === '1') {
        this.teacher = true;
        this.registrationForm.removeControl('studentId');
        this.registrationForm.removeControl('studentClass');
      } else {
        this.teacher = false;
      }

      if (data === '2') this.student = true; else this.student = false;
      if (data === '3') this.parent = true; else this.parent = false
    })
  }

  initForm() {
    this.registrationForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
      roleId: ['', [Validators.required]],
      studentId: ['', [Validators.required]],
      studentClass: ['', [Validators.required]],
      classes: [[], [Validators.required]],
      courseId: ['', [Validators.required]],
    })
  }

  register() {
    console.log(this.registrationForm.value);

    if (this.teacher) {

      this.teachersService.register(this.registrationForm.value).subscribe(res => {
        console.log(res);
      })
    }
    if (this.student) {
      this.studentService.register(this.registrationForm.value).subscribe(res => {
        console.log(res);
      })
    }

    if (this.parent) {
    }
  }

  setClasses() {
    this.registrationForm.controls['classes'].setValue([+this.registrationForm.get('classes')?.value]);
    console.log(this.registrationForm.value);
  }

}
