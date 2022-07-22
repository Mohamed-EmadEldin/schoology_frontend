import {Injectable} from '@angular/core';
import {IUiClass} from "../interfaces/Interfaces";
import {BehaviorSubject} from "rxjs";

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
  token:string,
  personId:number,
  newMessagesCount:number,
  newNotificationsCount:number,
}

@Injectable({
  providedIn: 'root'
})

export class StateService {
  public state: IAppState = {userId: -1, userName: "", userType: "",classes:[],courseId:-1,classId:-1,studentId:-1,token:"",className:"",personId:1,newMessagesCount:-1,newNotificationsCount:-1};
  constructor() {

  }
  public loggedInSubject:BehaviorSubject<boolean> = new BehaviorSubject(false)
  public notificationsCount:BehaviorSubject<number> = new BehaviorSubject(0)
  public userType:BehaviorSubject<string> = new BehaviorSubject<string>('')
  public setAppState(newState: any,token:string) {
    this.state.userId = newState.userId
    this.state.userName = newState.userName;
    this.state.userType = newState.userType;
    this.state.courseId = newState?.courseId;
    this.state.classes = newState?.classes;
    this.state.studentId = newState?.studentId
    this.state.classId = newState?.classId
    this.state.personId = newState.personId // temp
    this.state.newMessagesCount = newState.newMessagesCount // temp
    this.state.newNotificationsCount = newState.newNotificationsCount// temp
    this.notificationsCount.next(this.state.newNotificationsCount)
    this.userType.next(this.state.userType)
    this.loggedInSubject.next(true)
    localStorage.setItem("state",JSON.stringify(this.state))
    localStorage.setItem("token",`${token}`)

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
