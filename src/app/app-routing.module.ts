import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExamScreenComponent } from './exam/exam-screen/exam-screen.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'exam/:id',
    component: ExamScreenComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
