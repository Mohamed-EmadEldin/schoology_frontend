import {Component, OnInit, ViewChild} from '@angular/core';
import {Exam} from "../../models/exam";
import {ExamCrudService} from "../../services/admin/exam-crud.service";
import {ConfirmationService, MessageService} from "primeng/api";
import {Table} from "primeng/table";
import {HelperService} from "../../services/admin/helper.service";
import {ICourse, ITeacher, IUiClass} from "../../interfaces/Interfaces";
import {NgForm} from "@angular/forms";
import {ExamService} from "../../services/exam.service";

@Component({
  selector: 'app-exams-crud',
  templateUrl: './exams-crud.component.html',
  styleUrls: ['./exams-crud.component.css'],
  providers: [MessageService, ConfirmationService]
})

export class ExamsCrudComponent implements OnInit {

  _exams: Exam[] = []

  _exam: Exam = new Exam();

  clonedItems: { [s: string]: any; } = {}; //to help restore row if update is cancelled

  displayCreateModel: boolean = false; //boolean to show create dialog on request

  selectedExams: Exam [] = [] //to store multi-row select

  teachers: ITeacher[] = []
  selectedTeacherId: number = -1

  teacherClasses: IUiClass[] = []
  selectedClass: number = -1

  teacherCourses: ICourse[] = []
  selectedCourse: number = -1

  disableClassSelect: boolean = true;
  disableCourseSelect: boolean = true;
  isTeacherHasClasses: boolean = false;
  isTeacherSelected: boolean = false;

  invalid: boolean = false; //check create form status

  constructor(private examCrudService: ExamCrudService,
              private helperService: HelperService,
              private messageService: MessageService,
              private confirmationService: ConfirmationService) {
  }

  ngOnInit(): void {
    this.examCrudService.getExams()
      .subscribe(data => this._exams = data)
  }

  openCreateDialog() {
    this.helperService.getAllTeachers().subscribe(data => {
      this.teachers = data.map(value => {
        return {name: value.name, id: value.id}
      });
    })
    this.displayCreateModel = true;
  }

  getClasses(teacherId: number) {
    this.helperService.getTeacherClasses(teacherId).subscribe(data => {
      this.teacherClasses = data.map(value => {
        return {name: value.name, code: value.id}
      });
    });
  }

  getCourses(teacherId: number) {
    this.helperService.getTeacherCourse(teacherId).subscribe(data => {
      this.teacherCourses = data.map(value => {
        return {name: value.name, id: value.id}
      });
    });
  }

  async activateCourseAndClassDropdown(teacherId: number) {
    await this.getClasses(teacherId)
    await this.getCourses(teacherId)
    this.isTeacherHasClasses = true;
    this.disableClassSelect = false;
    this.disableCourseSelect = false;
    this.isTeacherSelected = true;
  }

  createExam() {
    this.invalid = false;
    if (this._exam.name !== '' || this._exam.link !== '' || this._exam.date != '') {
      this.examCrudService.createExam({
        ...this._exam,
        teacherId: this.selectedTeacherId,
        classId: this.selectedClass,
        courseId: this.selectedCourse
      }).subscribe(() => {
        this.messageService.add({severity: 'success', summary: 'Success', detail: 'Exam was created successfully'});
      });
      this.displayCreateModel = false;
    } else {
      this.invalid = true;
    }
  }

  onRowEditInit(_exam: any) {
    this.clonedItems[_exam.id] = {..._exam};
  }

  onRowEditSave(_exam: any) {
    let index = _exam.id;
    this.examCrudService.updateExam(index, _exam)
      .subscribe(data => this._exams.splice(index, 1, data))
      .unsubscribe();
    this.messageService.add({severity: 'success', summary: 'Success', detail: 'Exam is updated'});
  }

  onRowEditCancel(_exam: any, index: any) {
    this._exams[index] = this.clonedItems[_exam.id];
    delete this.clonedItems[_exam.id];
  }

  delete(_exam: any) {
    this.confirmationService.confirm({
      message: `Are you sure you want to delete class '${_exam.name}' ?`,
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this._exams = this._exams.filter(val => val.classId !== _exam.id);
        this.examCrudService.deleteExam(_exam.id)
          .subscribe(() => this._exams.splice(_exam.id, 1))
        this.messageService.add({severity: 'success', summary: 'Successful', detail: 'Product Deleted', life: 3000});
      }
    });
  }

  deleteSelectedExams() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected Exams?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this._exams = this._exams.filter(val => !this.selectedExams.includes(val));
        this.selectedExams = [];
        this.messageService.add({severity: 'success', summary: 'Successful', detail: 'users deactivated', life: 3000});
      }
    });
  }

  @ViewChild('dt') dt: Table | undefined

  applyFilterNameGlobal($event: any, stringVal: string) {
    this.dt!.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }

}
