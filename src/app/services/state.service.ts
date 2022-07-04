import {Injectable} from '@angular/core';

interface IAppState {
  userId: number, // userId based on the role like teacherId and studentId not userId from the database
  userName: string,
  userType: string,
  classes: object[],
  courseId:number,
  classId:number
}

@Injectable({
  providedIn: 'root'
})

export class StateService {
  private state: IAppState = {userId: -1, userName: "", userType: "",classes:[],courseId:-1,classId:-1};

  constructor() {
  }

  public setAppState(newState: IAppState) {
    this.state.userId = newState.userId;
    this.state.userName = newState.userName;
    this.state.userType = newState.userType;
  }

  public  getState() :IAppState
  {
    return this.state
  }



}
