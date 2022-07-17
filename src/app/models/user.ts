export class User {
  constructor(public id:number=0, public name:string='dummy user', public phone:number=10, public password:string='p',
              public roleId:number=0, public email:string='dummy-mail', public active: boolean) {
    this.id = id;
    this.name = name;
    this.phone = phone;
    this.password = password;
    this.roleId = roleId;
    this.email = email;
    this.active = active;
  }
}
