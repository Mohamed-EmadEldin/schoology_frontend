import { Component, OnInit } from '@angular/core';
import {SidebarService} from "../../services/sidebar.service";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(public sidebar: SidebarService) { }

  menuClick () {
    this.sidebar.toggleActive();
  }

  ngOnInit(): void {
  }

}
