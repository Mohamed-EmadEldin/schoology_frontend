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

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();

    this.registrationForm.get('roles')?.valueChanges.subscribe(data => {
      if(data === 'student') this.student = true; else this.student = false;
      if(data === 'teacher') this.teacher = true; else this.teacher = false;
      if(data === 'parent') this.parent = true; else this.parent = false
    })
  }

  initForm(){
    this.registrationForm = this.fb.group({
      name:['', [Validators.required] ],
      email:['', [Validators.required] ],
      password:['', [Validators.required] ],
      phoneNumber:['', [Validators.required] ],
      confirmPassword:['', [Validators.required] ],
      roles:['', [Validators.required] ],
      studentId:['', [Validators.required] ],
      studentClass:['', [Validators.required] ],
      teacherClasses:['', [Validators.required] ],
    })
  }

  register(){
    console.log(this.registrationForm.value);

  }

}
