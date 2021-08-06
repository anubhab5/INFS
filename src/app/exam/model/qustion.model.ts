export interface IQuestion {
    qId: number;
    question: string;
    optionList: Array<string>;
    answer: string;
    selectedAnswer: string;
    imgUrl: string;
}