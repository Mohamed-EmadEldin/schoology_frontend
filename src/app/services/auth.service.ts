import {Injectable} from '@angular/core';
import {StateService} from "./state.service";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private stateService: StateService) {
  }

  login() {

    this.stateService.setAppState({
      classId: 1,
      courseId: 1,
      classes: [{id: 1, name: "class1"}, {id: 2, name: "class2"}],
      userName:"Ahmed",
      userType:"teacher",
    })
  }
}
