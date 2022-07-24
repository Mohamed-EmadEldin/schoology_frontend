import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {StateService} from "../../services/state.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private authService:AuthService,private router:Router,private stateService:StateService) { }

  ngOnInit(): void {
    if (this.authService.isLoggedIn())
    {
      this.router.navigate([`/${this.stateService.getState().userType}`])
    }
  }

}
