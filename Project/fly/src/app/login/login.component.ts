import { Component } from '@angular/core';
import { User } from '../_models/user.model';
import { UserService } from '../_services/user.service';
import { Router } from '@angular/router';

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
  constructor(private userService: UserService,
    private router:Router){}

  onSubmit(){
    alert(this.user.email);
    this.userService.checkLogin(this.user).subscribe({
      next:(response:any)=>{
        if(response.token){
          alert(response.message);
        //  this.router.navigate(['/products']);
        }
      }
    });

  }


}
