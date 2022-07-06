import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,  } from '@angular/forms';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  image!:string ;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    ) { }

  ngOnInit(): void {
    console.log(this.router.url);

    switch (this.router.url) {
      case "/teacher-account":
         this.image ="../../../assets/images/backgrounds/teacher.gif ";
        break;

        case "/student-account":
          this.image ="../../../assets/images/backgrounds/student.gif ";
         break;

         case "/parent-account":
          this.image ="../../../assets/images/backgrounds/Parents.gif ";
         break;

         case "/admin-account":
          this.image ="../../../assets/images/backgrounds/Admin.gif ";
         break;
      default:
        break;
    }
    this.loginForm = this.fb.group({
      phone: [''],
      password: ['']

    })
  }

  login(){
    console.log(this.loginForm.value);
    this.http.post('http://localhost:3000/auth/signin', this.loginForm.value).subscribe(res => {
      console.log(res);
      if(res){
        this.router.navigate(['/cal'])
      }
    })

  }

}
