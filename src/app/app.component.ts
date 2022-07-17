import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {BehaviorSubject, filter} from 'rxjs';
import {StateService} from "./services/state.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  canShowNav = true;
  canShowSide: boolean = false

  mySubj = new BehaviorSubject<any>({text: 'message'});

  constructor(private router: Router, public stateService: StateService) {
  }

  ngOnInit() {
    // this.router.events.subscribe((event: any) => {
    //   if(event instanceof NavigationEnd)
    //     event.url === '/' || event.url === '/teacher-account' ? this.canShowNav = false : this.canShowNav = true;
    // })

    this.mySubj.subscribe((value: any) => {
      console.log(value);

    })

    this.mySubj.next({text: 'from next'})

    this.stateService.loggedInSubject.subscribe((state)=>{
      this.canShowSide=state
    })

  }

  title = 'scoolix-frontend';
}
