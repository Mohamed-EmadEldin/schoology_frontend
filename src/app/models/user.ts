export class User {
  constructor(public id:number=0, public name:string='', public phone:number=10, public password:string='',
              public roleId:number=0, public email:string='', public active: boolean = true) {
    this.id = id;
    this.name = name;
    this.phone = phone;
    this.password = password;
    this.roleId = roleId;
    this.email = email;
    this.active = active;
  }
}
