import {Router} from '@angular/router';
import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup,} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

import {MessageService} from 'primeng/api';

import {AuthService} from "../../services/auth.service";
import {StateService} from "../../services/state.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  image!: string;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private authService: AuthService,
    private messageService: MessageService,
    private stateService: StateService
  ) {
  }

  ngOnInit(): void {
    if (this.authService.isLoggedIn())
    {
      this.router.navigate([`/${this.stateService.getState().userType}`])
    }
    switch (this.router.url) {
      case "/teacher-account":
        this.image = "../../../assets/images/backgrounds/teacher.gif ";
        break;

      case "/student-account":
        this.image = "../../../assets/images/backgrounds/student.gif ";
        break;

      case "/parent-account":
        this.image = "../../../assets/images/backgrounds/Parents.gif ";
        break;

      case "/admin-account":
        this.image = "../../../assets/images/backgrounds/Admin.gif ";
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

    this.authService.login(this.loginForm.value).subscribe(res => {

        this.stateService.setAppState(res,res.token)

        this.router.navigate([`${this.stateService.getState().userType}/`])

      },
      error => {
        console.log(error)
        this.messageService.add({severity: 'error', summary: 'Error', detail: 'Invalid phone or password'});
      })
  }

}
