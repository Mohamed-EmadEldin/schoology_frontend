import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup,  } from '@angular/forms';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registerForm!: FormGroup;
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private http: HttpClient,) {

  }

  ngOnInit(): void {
    console.log(this.router);

  this.registerForm = this.fb.group({
    name:[''],
    phone: [''],
    password: ['']

  })
  }


register(){
    console.log(this.registerForm.value);
    this.http.post('http://localhost:3000/auth/signup', this.registerForm.value).subscribe(res => {
      console.log(res);
      if(res){
        this.router.navigate(['/login'])
      }
    })

  }
}
