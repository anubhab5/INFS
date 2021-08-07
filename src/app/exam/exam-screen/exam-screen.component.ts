import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExamUrl } from '../mapper/url-mapping';
import { QuestionlistService } from '../exam-service/questionlist.service';
import { IQuestion } from '../model/qustion.model';

@Component({
  selector: 'app-exam-screen',
  templateUrl: './exam-screen.component.html',
  styleUrls: ['./exam-screen.component.scss']
})
export class ExamScreenComponent implements OnInit {

  questionBank: Array<IQuestion> = [];
  questionToDisplay: IQuestion =
    {
      answer: "",
      imgUrl: "",
      qId: 0,
      question: "",
      selectedAnswer: "",
      optionList: []
    };
  displayedQuestionList: Array<number> = [];
  currentQuestionIndex: number = -1;
  private numberOfQuestionToDisplay = 10;

  constructor(private route: ActivatedRoute, private qlSvc: QuestionlistService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.getUrl(id);
  }

  getUrl(id: string) {
    const URL: any = ExamUrl;
    this.loadQuestionList(URL[id]);
  }

  loadQuestionList(url: string) {
    this.qlSvc.getQuestionList(url).subscribe(
      (resp: any) => {
        this.questionBank = resp;
        this.displayQuestion();
      },
      err => { });
  }

  displayQuestion() {
    const randomNumber = this.pickQuestionToDisplay();
    this.questionToDisplay = this.questionBank[randomNumber - 1];
    this.currentQuestionIndex = this.displayedQuestionList.length;
    console.log(randomNumber);
  }

  pickQuestionToDisplay(): number {
    let randomNumber = Math.floor(Math.random() * this.questionBank.length) + 1;
    while (this.displayedQuestionList.indexOf(randomNumber) !== -1 && this.displayedQuestionList.length < this.numberOfQuestionToDisplay) {
      randomNumber = Math.floor(Math.random() * this.questionBank.length) + 1;
    }
    this.displayedQuestionList.push(randomNumber);
    return randomNumber;
  }

  nextQuestion() {
    if (this.displayedQuestionList.length < this.numberOfQuestionToDisplay)
      this.displayQuestion();
  }

  previousQuestion() { }

}
