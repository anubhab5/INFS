import { Injectable } from '@angular/core';
import { IExam } from '../model/exam-selection.model';

@Injectable()
export class ExamSelectionService {

  private examList: Array<IExam> = [];
  
  constructor() { 
    this.setExamList();
  }

  private setExamList() {
    this.examList = [
      {
        examCode: 'E103',
        examName: 'Basics of Anatomy and Physiology',
        numberOfQuestions: 100
      },
      {
        examCode: 'E105',
        examName: 'Introduction to the Gym',
        numberOfQuestions: 100
      },
      {
        examCode: 'E106',
        examName: 'Fitness training variables and Techniques',
        numberOfQuestions: 100
      },
      {
        examCode: 'N104',
        examName: 'Biochemistry',
        numberOfQuestions: 100
      },
      {
        examCode: 'N105',
        examName: 'Micro Nutrients and Hydration',
        numberOfQuestions: 100
      },
      {
        examCode: 'N106',
        examName: 'Supplements',
        numberOfQuestions: 100
      },
      {
        examCode: 'N107',
        examName: 'Weight Management and Diet planning',
        numberOfQuestions: 100
      },
      {
        examCode: 'N109',
        examName: 'Lifestyle disorder and special population',
        numberOfQuestions: 100
      }
    ];
  }

  getExamList(){
    return this.examList;
  } 

}
