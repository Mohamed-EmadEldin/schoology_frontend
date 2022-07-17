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
    console.log(this.router.url);

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

  login() {
    console.log(this.loginForm.value);

    this.authService.login(this.loginForm.value).subscribe(res => {
        console.log(res)
        this.stateService.setAppState(res)
        localStorage.setItem("token", `${res.token}`)
        console.log(res.token)
        let type: string = this.stateService.getState().userType
        if (type === 'teacher' || type === 'student') {
          this.router.navigate([`${this.stateService.getState().userType}/cal`])
        } else if (type === 'admin') {
          this.router.navigate(['/admin'])
        }
      },
      error => {
        console.log(error)
        this.messageService.add({severity: 'error', summary: 'Error', detail: 'Invalid phone or password'});
      })
  }

}
