import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class SidebarService {

  sidebar: boolean;
  constructor() {
    this.sidebar = false;
  }

  toggleActive () {
    this.sidebar = !this.sidebar;
    return this.sidebar;
  }

}
