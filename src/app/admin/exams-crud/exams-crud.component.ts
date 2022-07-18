import {Component, OnInit, ViewChild} from '@angular/core';
import {Exam} from "../../models/exam";
import {ExamCrudService} from "../../services/admin/exam-crud.service";
import {ConfirmationService, MessageService} from "primeng/api";
import {Table} from "primeng/table";

@Component({
  selector: 'app-exams-crud',
  templateUrl: './exams-crud.component.html',
  styleUrls: ['./exams-crud.component.css'],
  providers: [MessageService, ConfirmationService]
})

export class ExamsCrudComponent implements OnInit {

  _exams: Exam[] = []

  clonedItems: { [s: string]: any; } = {}; //to help restore row if update is cancelled

  displayCreateModel: boolean = false; //boolean to show create dialog on request

  selectedExams: Exam [] = [] //to store multi-row select


  constructor(private examCrudService: ExamCrudService,
              private messageService: MessageService,
              private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
    this.examCrudService.getExams()
      .subscribe(data => this._exams = data)
  }

  openCreateDialog() {
    this.displayCreateModel = true;
  }

  onRowEditInit(_exam: any) {
    this.clonedItems[_exam.id] = {..._exam};
  }

  onRowEditSave(_exam: any) {
    let index = _exam.id;
    this.examCrudService.updateExam(index, _exam)
      .subscribe(data => this._exams.splice(index, 1, data))
      .unsubscribe();
    this.messageService.add({severity:'success', summary: 'Success', detail:'Class is updated'});
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
          .subscribe(() => this._exams.splice(_exam.id,1))
        this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Deleted', life: 3000});
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
        this.messageService.add({severity:'success', summary: 'Successful', detail: 'users deactivated', life: 3000});
      }
    });
  }

  @ViewChild('dt') dt: Table | undefined
  applyFilterNameGlobal($event: any, stringVal: string) {
    this.dt!.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }

}
