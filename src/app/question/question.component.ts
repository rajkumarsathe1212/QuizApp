import { Component, OnInit } from '@angular/core';
import { QueServiceService } from '../shared/que-service.service';
import { interval } from 'rxjs';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit{

  public name:string = "";
  questionList:any = [];
  currentQuestion:number = 0;
  points:number = 0;
  counter = 60;
  correctAnswer :number = 0;
  incorrectAnswer:number = 0;
  interval$:any;
  progress:string = "0";
  isQuizCompleted:boolean = false;


  constructor(private api:QueServiceService) { }

  ngOnInit(): void {
    this.name = localStorage.getItem("name")!;
    this.startCounter();

    this.getQuestions();
  }

  getQuestions(){
    this.api.get().subscribe((result:any)=>{
      this.questionList = result.questions;
    })
  }

  nextQuestion(){
    this.currentQuestion++;
  }

 previousQuestion(){
  this.currentQuestion--;
  }

  answer(currentQno:number,o:any){
    if(currentQno === this.questionList.length){
      this.isQuizCompleted = true;
      this.stopCounter();
    }

    if(o.correct){
      this.points = this.points + 10;
      this.correctAnswer++;
      setTimeout(() => {
        this.currentQuestion++;
        this.resetCounter();
        this.getProgressPercent();
      }, 500);

    }
    else{
      setTimeout(() => {
        this.currentQuestion++;
        this.incorrectAnswer++;
        this.resetCounter();
        this.getProgressPercent();
      }, 500);

      this.points = this.points-10;
    }
  }

  startCounter(){
    this.interval$ = interval(1000).subscribe((result:any)=>{
      this.counter--;

      if(this.counter ==  0){
        this.currentQuestion++;
        this.counter = 60;
        this.points-=10;
      }
    });

    setTimeout(() => {
      this.interval$.unsubscribe();
    }, 600000);
  }

  stopCounter(){
    this.interval$.unsubscribe();
    this.counter = 0;
  }

  resetCounter(){
    this.stopCounter();
    this.counter = 60;
    this.startCounter();
  }

  resetQuiz(){
    this.resetCounter();

    this.getQuestions();

    this.points = 0;
    this.counter = 60;

    this.currentQuestion = 0;
    this.progress = "0";
  }

  getProgressPercent(){
    this.progress = ((this.currentQuestion/this.questionList.length)*100).toString();
    return this.progress;
  }

}
