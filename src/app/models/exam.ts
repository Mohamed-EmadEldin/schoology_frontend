import {ClassRoom} from "./classRoom";
import {Course} from "./course";

export class Exam{
  constructor(public name:string='',public classRoom:ClassRoom,public course:Course,public date:'',public link='') {
    this.date=date
    this.name=name
    this.classRoom=new ClassRoom()
    this.course=new Course()
  }
}
