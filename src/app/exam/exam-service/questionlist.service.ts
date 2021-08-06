import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionlistService {

  constructor(private httpClient: HttpClient) { }

  getQuestionList(url: string) {
    return this.httpClient.get(url);
  }


}