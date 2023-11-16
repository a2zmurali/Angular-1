import { Component } from '@angular/core';
import { User } from '../_models/user.model';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  users!:User[];
   subscription:Subscription;

  constructor(private userService: UserService,
    private router:Router){}

  ngOnInit(): void {

    this.subscription = this.userService.getUsers()
    .subscribe({
      next:data=>this.users = data,
      error: err=>console.log(err),
      complete:()=>console.log('complete')
    })

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();

  }
}
