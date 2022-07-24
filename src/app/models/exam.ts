export class Exam{
  constructor(public name:string='',public courseId:number=0 ,public classId:number=0,
              public date:string='',public link:string='',public teacherId:number=-1) {
    this.name = name;
    this.courseId = courseId;
    this.classId = classId;
    this.date = date;
    this.link = link;
    this.teacherId = teacherId;
  }
}
