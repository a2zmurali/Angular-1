import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user.model';
import { Router } from '@angular/router';
import { SharedDataService } from '../services/shared-data.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  user:User = {email:'', password:''};


  constructor(private userService: UserService,
    private sharedDataService:SharedDataService,
    private router:Router,){}

  onSubmit(){
    alert(this.user.email);
    this.userService.checkLogin(this.user).subscribe({
      next:(response:any)=>{
        if(response.token){
          alert(response.message);
          this.sharedDataService.LoggedIn(true);
          this.userService.setToken(response.token);
          this.router.navigate(['/products']);
        }
      }
    });
  }



}
