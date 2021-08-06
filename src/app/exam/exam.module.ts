import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExamSelectionComponent } from './exam-selection/exam-selection.component';
import { ExamScreenComponent } from './exam-screen/exam-screen.component';



@NgModule({
  declarations: [
    ExamSelectionComponent,
    ExamScreenComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ExamSelectionComponent,
    ExamScreenComponent
  ]
})
export class ExamModule { }
