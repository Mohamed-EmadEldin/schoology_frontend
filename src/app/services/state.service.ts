import {Injectable} from '@angular/core';
import {IUiClass} from "../teacher/meeting/create-meeting/create-meeting.component";

export interface IClassRoom {
  name: string,
  id: number
}

export interface IAppState {
  userId: number, // userId based on the role like teacherId and studentId not userId from the database
  userName: string,
  userType: string,
  classes: IClassRoom[],
  courseId: number,
  classId: number,
  className:string,
  studentId: number,
  token:string
}

@Injectable({
  providedIn: 'root'
})

export class StateService {
  public state: IAppState = {userId: -1, userName: "", userType: "",classes:[],courseId:-1,classId:-1,studentId:-1,token:"",className:""};
  constructor() {
    // this.state.classId = 1
    // this.state.userId = 1
    // this.state.classes = [{id: 1, name: "class1"},
    //   {id: 2, name: "class2"},
    //   {id: 2, name: "class3"},
    // ]
    // this.state.userName = "Ahmed"
    // this.state.userType = "teacher"
    // this.state.courseId=1
  }

  public setAppState(newState: any) {
    this.state.userId = newState.userId
    this.state.userName = newState.userName;
    this.state.userType = newState.userType;
    this.state.courseId = newState?.courseId;
    this.state.classes = newState?.classes;
    this.state.studentId = newState?.studentId
    this.state.classId = newState?.classId
    console.log(this.state)
    localStorage.setItem("state",JSON.stringify(this.state))
  }
  public getState(): IAppState {

    // @ts-ignore
    return JSON.parse(localStorage.getItem("state"))
  }

  public mapClassesToUiRep():IUiClass[]
  {
    return this.getState().classes.map(classRoom=>{
      return {name:classRoom.name,code:classRoom.id}
    })
  }

}
