import { TeachersService } from './../../services/teachers.service';
import { Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registrationForm!: FormGroup;
  student: boolean = false;
  teacher:boolean = false;
  parent:boolean = false;

  constructor(private fb: FormBuilder, private teachersService: TeachersService) { }

  ngOnInit(): void {
    this.initForm();

    this.registrationForm.get('roleId')?.valueChanges.subscribe(data => {
      if(data === '0') this.student = true; else this.student = false;
      if(data === '1') this.teacher = true; else this.teacher = false;
      if(data === '2') this.parent = true; else this.parent = false
    })
  }

  initForm(){
    this.registrationForm = this.fb.group({
      name:['', [Validators.required] ],
      email:['', [Validators.required] ],
      password:['', [Validators.required] ],
      phone:['', [Validators.required] ],
      confirmPassword:['', [Validators.required] ],
      roleId:['', [Validators.required] ],
      studentId:['', [Validators.required] ],
      studentClass:['', [Validators.required] ],
      teacherClasses:['', [Validators.required] ],
      teacherCourses:['',[Validators.required]],
    })
  }

  register(){
    console.log(this.registrationForm.value);

    this.teachersService.register(this.registrationForm.value).subscribe(res => {
      console.log(res);

    })

  }

}
