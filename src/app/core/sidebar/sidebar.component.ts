import { Component, OnInit } from '@angular/core';
import {SidebarService} from "../../services/sidebar.service";
import {trigger, state, style, transition, animate} from "@angular/animations";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  animations: [
    trigger('children', [
      state('void', style({
        height: '0px'
      })),
      state('hiddenAnimated', style({
        height: '0px'
      })),
      state('visibleAnimated', style({
        height: '10'
      })),
      transition('visibleAnimated => hiddenAnimated', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')),
      transition('hiddenAnimated => visibleAnimated', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')),
      transition('void => visibleAnimated, visibleAnimated => void',
        animate('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
    ])
  ]
})
export class SidebarComponent implements OnInit {

  model: any[] | undefined

  constructor(public sidebar: SidebarService) {
  }

  ngOnInit(): void {
    this.model = [
      {
        label: 'Home',
        items:[
          {label: 'Dashboard',icon: 'pi pi-fw pi-home', routeTo: ''}
        ]
      },
      {
        label: 'UI Components',
        items: [
          {label: 'Form Layout', icon: 'pi pi-fw pi-id-card', routeTo: 'uikit/formlayout'},
          {label: 'Input', icon: 'pi pi-fw pi-check-square', routeTo: 'uikit/input'},
          {label: 'Float Label', icon: 'pi pi-fw pi-bookmark', routeTo: 'uikit/floatlabel'},
        ]
      },
    ];
    console.log(this.model)
  }

}
