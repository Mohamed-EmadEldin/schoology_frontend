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
  userType: number = -1;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    // this.initForm();

    // this.registrationForm.get('roleId')?.valueChanges.subscribe(data => {
    //   if(data === '1'){
    //     this.teacher = true;
    //     this.registrationForm.removeControl('studentId');
    //     this.registrationForm.removeControl('studentClass');
    //   }
    //   else{
    //     this.teacher = false;
    //   }
    //
    //   this.student = data === '2';
    //   this.parent = data === '3';
    // })
  }

  // initForm(){
  //   this.registrationForm = this.fb.group({
  //     name:['', [Validators.required] ],
  //     email:['', [Validators.required] ],
  //     password:['', [Validators.required] ],
  //     phone:['', [Validators.required] ],
  //     confirmPassword:['', [Validators.required] ],
  //     roleId:['', [Validators.required] ],
  //     studentId:['', [Validators.required] ],
  //     studentClass:['', [Validators.required] ],
  //     classes:[[], [Validators.required] ],
  //     courseId:['',[Validators.required]],
  //   })
  // }

  // register(){
  //   console.log(this.registrationForm.value);
  //
  //   if(this.userType === 1){
  //
  //     this.teachersService.register(this.registrationForm.value).subscribe(res => {
  //       console.log(res);
  //     })
  //   }
  //   if(this.userType === 2){
  //     this.studentService.register(this.registrationForm.value).subscribe(res => {
  //       console.log(res);
  //     })
  //   }
  //
  //   if(this.userType === 3){
  //   }
  // }

  // setClasses(){
  //   this.registrationForm.controls['classes'].setValue([+this.registrationForm.get('classes')?.value]);
  //   console.log(this.registrationForm.value);
  // }

}
