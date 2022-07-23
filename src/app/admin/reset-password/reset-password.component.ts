import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  public id:string | null =''
  public password:string=''
  public confirmPassword:string=''
  passwordMatch: boolean = true

  invalid: boolean = false; //to check inputs
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')

  }

  handelSubmit() {
    if(this.password !== this.confirmPassword)
    {
      this.invalid = true
      this.passwordMatch = false
      return
    } else
    {
      console.log('ook')
    }
  }
}
