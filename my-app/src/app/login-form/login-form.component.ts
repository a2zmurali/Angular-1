import { Component } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  user:any = {email:'shanraylab05@gmail', password:'1234'};

  onSubmit(){
    alert(this.user.email);
    sessionStorage.setItem('Email',this.user.email)
  }
}
