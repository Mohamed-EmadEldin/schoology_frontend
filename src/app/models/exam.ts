import {ClassRoom} from "./classRoom";
import {Course} from "./course";

export class Exam{
  constructor(public name:string='',public courseId=0 ,public classId=0,public date='',public link='',public teacherId=-1) {
    // this.date=date
    // this.name=name
    // this.classRoom=new ClassRoom()
    // this.course=new Course()
  }
}
