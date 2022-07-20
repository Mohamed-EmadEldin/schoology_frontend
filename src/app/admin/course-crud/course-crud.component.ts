import {Component, OnInit, ViewChild} from '@angular/core';
import {CourseCrudService} from "../../services/admin/course-crud.service";
import {ConfirmationService, MessageService} from "primeng/api";
import {ClassRoom} from "../../models/classRoom";
import {Course} from "../../models/course";
import {Table} from "primeng/table";

@Component({
  selector: 'app-course-crud',
  templateUrl: './course-crud.component.html',
  styleUrls: ['./course-crud.component.css'],
  providers: [MessageService, ConfirmationService]
})
export class CourseCrudComponent implements OnInit {

  _courses: Course [] = []; //store the courses

  clonedItems: { [s: string]: any; } = {}; //to help restore row if update is cancelled

  displayCreateModel: boolean = false; //boolean to show create dialog on request

  selectedCourses: Course[] = []; //to store multi-row select

  constructor(private courseCrudService: CourseCrudService,
              private messageService: MessageService,
              private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
    this.courseCrudService.getCourses()
      .subscribe(data => this._courses = data)
  }

  openCreateDialog() {
    this.displayCreateModel = true;
  }

  invalid: boolean = false;
  createCourse(name: string) {
    this.invalid = false;
    if (name !== ''){
      this.courseCrudService.createCourse(name)
        .subscribe(data => this._courses.push(data))
      this.displayCreateModel = false;
    }else {
      this.invalid = true;
    }
  }

  onRowEditInit(_course: any) {
    this.clonedItems[_course.id] = {..._course};
  }

  onRowEditSave(_course: any) {
    let index = _course.id;
    let name = _course.name;
    this.courseCrudService.updateCourse(index, name)
      .subscribe(data => {
        this._courses.splice(index, 1, data);
        this.messageService.add({severity:'success', summary: 'Success', detail:'Class is updated'});
      })
      .unsubscribe();
  }

  onRowEditCancel(_course: any, index: any) {
    this._courses[index] = this.clonedItems[_course.id];
    delete this.clonedItems[_course.id];
  }

  delete(_course: any) {
    this.confirmationService.confirm({
      message: `Are you sure you want to delete course '${_course.name}' ?`,
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this._courses = this._courses.filter(val => val.id !== _course.id);
        this.courseCrudService.deleteCourse(_course.id)
          .subscribe(() => {
            this._courses.splice(_course.id, 1)
            this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Deleted', life: 3000});
          });
      }
    });
  }

  //TODO: multi-delete logic... ??
  deleteSelectedCourses() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected courses?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this._courses = this._courses.filter(val => !this.selectedCourses.includes(val));
        this.selectedCourses = [];
        this.messageService.add({severity:'success', summary: 'Successful', detail: 'Classes Deleted', life: 3000});
      }
    });
  }

  @ViewChild('dt') dt: Table | undefined
  applyFilterNameGlobal($event: any, stringVal: string) {
    this.dt!.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }

}
