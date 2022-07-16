import {Component, OnInit, ViewChild} from '@angular/core';
import {ConfirmationService, MessageService} from "primeng/api";
import {ClassCrudService} from "../../services/admin/class-crud.service";
import {ClassRoom} from "../../models/classRoom";
import {Table} from "primeng/table";

@Component({
  selector: 'app-class-crud',
  templateUrl: './class-crud.component.html',
  styleUrls: ['./class-crud.component.css'],
  providers: [MessageService, ConfirmationService]
})

export class ClassCrudComponent implements OnInit {

  _classes: ClassRoom [] = []; //store the classes

  clonedItems: { [s: string]: any; } = {}; //to help restore row if update is cancelled

  displayCreateModel: boolean = false; //boolean to show create dialog on request

  selectedClasses: ClassRoom[] = []; //to store multi-row select

  constructor(private messageService: MessageService,
              private confirmationService: ConfirmationService,
              private classCrudService: ClassCrudService) { }

  ngOnInit(): void {
    this.classCrudService.getClasses()
      .subscribe(data => this._classes = data)
  }


  openCreateDialog() {
    this.displayCreateModel = true;
  }

  // createClass(name: string) {
  //   let sub: any;
  //   new Promise(() => {
  //     sub = this.classCrudService.createClass(name)
  //       .subscribe(data => this._classes.push(data))
  //   }).then(sub.unsubscribe())
  //   this.displayCreateModel = false;
  // }

  createClass(name: string) {
    this.classCrudService.createClass(name)
        .subscribe(data => this._classes.push(data))
    this.displayCreateModel = false;
  }

  onRowEditInit(_class: any) {
    this.clonedItems[_class.id] = {..._class};
  }

  onRowEditSave(_class: any) {
    let index = _class.id;
    let name = _class.name;
    this.classCrudService.updateClass(index, name)
      .subscribe(data => this._classes.splice(index, 1, data))
      .unsubscribe();
    this.messageService.add({severity:'success', summary: 'Success', detail:'Class is updated'});
  }

  onRowEditCancel(_class: any, index: any) {
    this._classes[index] = this.clonedItems[_class.id];
    delete this.clonedItems[_class.id];
  }

  delete(_class: any) {
    this.confirmationService.confirm({
      message: `Are you sure you want to delete class '${_class.name}' ?`,
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this._classes = this._classes.filter(val => val.classId !== _class.id);
        this.classCrudService.deleteClass(_class.id)
          .subscribe(() => this._classes.splice(_class.id,1))
        this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Deleted', life: 3000});
      }
    });
  }

  //TODO: multi-delete logic... node needed ??
  deleteSelectedClasses() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected classes?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this._classes = this._classes.filter(val => !this.selectedClasses.includes(val));
        this.selectedClasses = [];
        this.messageService.add({severity:'success', summary: 'Successful', detail: 'Classes Deleted', life: 3000});
      }
    });
  }

  @ViewChild('dt') dt: Table | undefined
  applyFilterNameGlobal($event: any, stringVal: string) {
    this.dt!.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }
}
