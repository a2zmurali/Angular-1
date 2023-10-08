import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
 /*  template:`<h1> {{title}} </h1>
   <h2>{{ Work()}}</h2>`, */
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  title:string = "String binding test";

  Work():string {
    return "Work string"
  }
}
