import {Injectable} from '@angular/core';

interface IClassRoom {
  name:string,
  id:number
}

interface IAppState {
  userId: number, // userId based on the role like teacherId and studentId not userId from the database
  userName: string,
  userType: string,
  classes: IClassRoom[],
  courseId:number,
  classId:number,
  studentId:number
}

@Injectable({
  providedIn: 'root'
})

export class StateService {
  private state: IAppState = {userId: -1, userName: "", userType: "",classes:[],courseId:-1,classId:-1,studentId:-1};

  constructor() {
  }

  public setAppState(newState:any) {
    this.state.userId = newState.userId
    this.state.userName = newState.userName;
    this.state.userType = newState.userType;
    this.state.courseId=newState?.courseId;
    this.state.classes=newState?.classes;
    this.state.studentId=newState?.studentId
  }

  public  getState() :IAppState
  {
    return this.state
  }



}
