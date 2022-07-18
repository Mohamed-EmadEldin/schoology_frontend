import { StudentService } from './../../services/students.service';
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

  constructor(private fb: FormBuilder, private teachersService: TeachersService, private studentService: StudentService) { }

  ngOnInit(): void {
    this.initForm();

    this.registrationForm.get('roleId')?.valueChanges.subscribe(data => {
      if(data === '1'){
        this.teacher = true;
        this.registrationForm.removeControl('studentId');
        this.registrationForm.removeControl('studentClass');
      }
      else{
        this.teacher = false;
      }

      if(data === '2') this.student = true; else this.student = false;
      if(data === '3') this.parent = true; else this.parent = false
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
      classes:[[], [Validators.required] ],
      courseId:['',[Validators.required]],
    })
  }

  register(){
    console.log(this.registrationForm.value);

    if(this.teacher){

      this.teachersService.register(this.registrationForm.value).subscribe(res => {
        console.log(res);
      })
    }
    if(this.student){
      this.studentService.register(this.registrationForm.value).subscribe(res => {
        console.log(res);
      })
    }

    if(this.parent){
    }
  }

  setClasses(){
    this.registrationForm.controls['classes'].setValue([+this.registrationForm.get('classes')?.value]);
    console.log(this.registrationForm.value);
  }

}
