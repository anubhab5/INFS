import { Component, OnInit } from '@angular/core';
import { IExam } from '../model/exam-selection.model';
import { ExamSelectionService } from '../exam-service/exam-selection.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exam-selection',
  templateUrl: './exam-selection.component.html',
  styleUrls: ['./exam-selection.component.scss'],
  providers: [ExamSelectionService]
})
export class ExamSelectionComponent implements OnInit {

  public examList: Array<IExam> = [];
  public selectedExam: IExam | null = null;

  constructor(private examSvc: ExamSelectionService, private router: Router) { }

  ngOnInit(): void {
    this.getExamList();
  }

  getExamList() {
    this.examList = this.examSvc.getExamList();
  }

  selectExam(exam: IExam) {
    this.selectedExam = exam;
  }

  startExam() {
    this.router.navigate(['exam', this.selectedExam?.examCode]);
  }
}

