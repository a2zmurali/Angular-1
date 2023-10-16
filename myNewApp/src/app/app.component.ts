import { Component } from '@angular/core';
import { NextObserver } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title:string

  course:string[];
  hide:boolean= true;




  constructor(){
    this.course = ["Angular", "Tyoescript","HTML"];
    this.hide = true;
    this.title = 'myNewApp';

  //  Observable

  /*
    const test$ = new Observable((subscriber) => {
      console.log('subscriber start');
      subscriber.next('1');
      subscriber.next('11');
      subscriber.complete();
      subscriber.next('111');
    });

    test$.subscribe(
      x => {console.log('subscribe nxt value', x)},
      error =>  {console.log('Error');},
      complete =>  {console.log('complete');}
    );

    */

   // Observable


  }

  toogle(){
     return this.hide = !this.hide;

  }

  getcourse():string[]{
    return this.course
  }
  isvaliduser:boolean | null = null;

  Login(){
    return this.isvaliduser= true;
  }
  Logoff(){
    return this.isvaliduser= false;
  }

  menu =[{
    color: "purple",
    type: "minivan",
    registration: new Date('2012-02-03'),
    capacity: 7
  },
  {
    color: "dsdsd",
    type: "minsdfssdsivan",
    registration: new Date('2012-02-03'),
    capacity: 17
  }


];



}
