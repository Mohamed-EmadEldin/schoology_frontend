import { Router, NavigationEnd } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {SidebarService} from "../../services/sidebar.service";
import {AuthService} from "../../services/auth.service";
import {StateService} from "../../services/state.service";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  canShowNav = true;
  constructor(
    public sidebar: SidebarService,
    private router: Router,
    private authService:AuthService,
    public stateService:StateService

    ) { }

  menuClick () {
    this.sidebar.toggleActive();
  }

  ngOnInit(): void {
        this.router.events.subscribe((event: any) => {
      if(event instanceof NavigationEnd)
        event.url === '/' || event.url === '/teacher-account' ||event.url === '/student-account' ||event.url === '/parent-account' ||event.url === '/admin-account' || event.url==='/about'? this.canShowNav = false : this.canShowNav = true;
    })

  }

  logout() : void
  {
    this.authService.logout()
    this.router.navigate([""])
  }
}
