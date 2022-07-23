import {Router, NavigationEnd} from '@angular/router';
import {Component, OnInit} from '@angular/core';
import {SidebarService} from "../../services/sidebar.service";
import {AuthService} from "../../services/auth.service";
import {StateService} from "../../services/state.service";
import {NotificationService} from "../../services/notification.service";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  canShowNav = true;
  public userType: string = '';
  route: string = '/'
  public notificationsCount:number = 0
  constructor(public sidebar: SidebarService,
              private router: Router,
              private authService: AuthService,
              public stateService: StateService,
              public notificationsService:NotificationService) { }

  menuClick() {
    this.sidebar.toggleActive();
  }

  setRoute() {
    if (this.userType !== null || this.userType !== '') {
      if (this.router.url != `/${this.userType}`){
        this.router.navigate([`/${this.userType}`])
      }
    }else {
      if (this.router.url !== '/') {
        this.router.navigate(['/'])
      }
    }
  }

  ngOnInit(): void {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd)
      this.canShowNav = this.authService.isLoggedIn()
      console.log(this.authService.isLoggedIn())
    })
    this.stateService.notificationsCount.subscribe({
      next:(value)=>{
        this.notificationsCount = value
      }
    })
    this.notificationsService.getNewNotificationsCount().subscribe({
      next:(res)=>{
        this.notificationsCount = res.count
        console.log(this.notificationsCount)
      }
    })
    this.stateService.userType.subscribe({
      next: (value) => {
        this.userType = value
        if(!value)
        {
          this.userType = this.stateService.getState().userType
        }
      }
    })

  }

  logout(): void {
    this.authService.logout()
    this.router.navigate([""])
  }
}
