import {Component, OnInit, ViewChild} from '@angular/core';
import {ConfirmationService, MessageService} from "primeng/api";
import {User} from "../../models/user";
import {UsersCrudService} from "../../services/admin/users-crud.service";
import {Table} from "primeng/table";

@Component({
  selector: 'app-users-crud',
  templateUrl: './users-crud.component.html',
  styleUrls: ['./users-crud.component.css'],
  providers: [MessageService, ConfirmationService]
})
export class UsersCrudComponent implements OnInit {

  _users: User[] = [] //store the users
  _nonAdminUsers: User[] = []

  clonedItems: {[s:string]: any} = {}; //restore row if update is canceled

  displayCreateModel: boolean = false; //display create dialog

  selectedUsers: User[] = [] // to store multi-row select

  constructor(private messageService: MessageService,
              private confirmationService: ConfirmationService,
              private usersCrudService: UsersCrudService) { }

  ngOnInit(): void {
    this.usersCrudService.getUsers()
      .subscribe(data => {
        this._users = data;
        for (let _user of this._users) {
          if(_user.roleId != 4) {
            this._nonAdminUsers.push(_user)
          }
        }
      });
  }


  onRowEditInit(_user: any) {
    this.clonedItems[_user.id] = {..._user};
  }

  onRowEditSave(_user: User) {
    let index = _user.id;
    this.usersCrudService.updateUser(index, _user)
      .subscribe(data => this._users.splice(index, 1, data))
      .unsubscribe();
    this.messageService.add({severity:'success', summary: 'Success', detail:'User is updated'});
  }

  onRowEditCancel(_user: User, index: any) {
    this._users[index] = this.clonedItems[_user.id];
    delete this.clonedItems[_user.id];
  }

  deactivate(_user: User) {
    this.confirmationService.confirm({
      message: `Are you sure you want to deactivate user '${_user.name}' ?`,
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.usersCrudService.deactivateUser(_user.id)
          .subscribe(() => {
            let user = this._users.find(val => val.id == _user.id)
            user!.active = false
            // @ts-ignore
            this._users.splice(_user.id, 1, user)
          })
        this.messageService.add({severity:'success', summary: 'Successful',
          detail: 'user deactivated', life: 3000});
      }
    });
  }

  //TODO: multi-delete logic... node needed ??
  deactivateSelectedUsers() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to deactivate the selected Users?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this._users = this._users.filter(val => !this.selectedUsers.includes(val));
        this.selectedUsers = [];
        this.messageService.add({severity:'success', summary: 'Successful', detail: 'users deactivated', life: 3000});
      }
    });
  }

  @ViewChild('dt') dt: Table | undefined
  applyFilterNameGlobal($event: any, stringVal: string) {
    this.dt!.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }

  activate(_user: any) {
    this.confirmationService.confirm({
      message: `Are you sure you want to activate user '${_user.name}' ?`,
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.usersCrudService.activate(_user.id)
          .subscribe(() => {
            let user = this._users.find(val => val.id == _user.id)
            // user!.active = false
            // // @ts-ignore
            // this._users.splice(_user.id, 1, user)
            this.messageService.add({severity:'success', summary: 'Successful',
              detail: 'user activated', life: 3000});
          })

      }
    });
  }
}
