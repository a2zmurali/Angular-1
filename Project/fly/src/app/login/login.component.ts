import { Component } from '@angular/core';
import { User } from '../_models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user:User = {
    email: '', password: '',
    firstName: '',
    lastName: ''
  };

  onSubmit(){
    alert(this.user.email);

  }


}
