import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  canShowNav = true;

  constructor(private router:Router){}

  ngOnInit(){
    this.router.events.subscribe((event: any) => {
      if(event instanceof NavigationEnd)
        event.url === '/' || event.url === '/teacher-account' ? this.canShowNav = false : this.canShowNav = true;
    })
  }

  title = 'scoolix-frontend';
}
