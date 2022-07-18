export class Meeting {
  constructor(public id=0, public name:string='',public description:string='',public link='',
              public classId:number=0, public courseId:number=0,public period:number=0,
              public date:string='') {
    this.id = id;
    this.name=name;
    this.description=description;
    this.link = link;
    this.date=date;
    this.classId=classId;
    this.courseId=courseId;
  }
}
