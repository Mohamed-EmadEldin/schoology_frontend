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
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm()
  }

  initForm(){
    this.registrationForm = this.fb.group({
      name:['', [Validators.required] ],
      email:['', [Validators.required] ],
      Password:['', [Validators.required] ],
      phoneNumber:['', [Validators.required] ],
      confirmPassword:['', [Validators.required] ],
      rules:['', [Validators.required] ],
      studentId:['', [Validators.required] ],
      studentClass:['', [Validators.required] ],
      teacherClasses:['', [Validators.required] ],
    })
  }

}
