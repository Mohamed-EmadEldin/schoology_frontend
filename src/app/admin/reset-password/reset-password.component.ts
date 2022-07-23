import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UsersCrudService} from "../../services/admin/users-crud.service";

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
  constructor(private route:ActivatedRoute,private userCrudService:UsersCrudService,private router:Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')

  }

  handelSubmit() {
    if(this.password !== this.confirmPassword )
    {
      this.invalid = true
      this.passwordMatch = false
      return
    }
    if(this.confirmPassword === '')
    {
      this.invalid = true
      return;
    } else
    {
      this.userCrudService.resetPassword(this.id,this.password).subscribe({
        next:(res)=>{
          if (res.success)
          {
            this.router.navigate(['/admin/user-crud'])
          }
        }
      })
    }
  }
}
