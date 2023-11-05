import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedDataService } from './services/shared-data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  isLoggedIn:boolean;
  isLoggedOut:boolean;

  categories:string[] = ['Mobiles','Laptops', 'Furnitures'];
  constructor(private sharedDataService:SharedDataService,
    private router:Router){}

    ngOnInit(): void {
      //getting value from observa
      this.sharedDataService.isLoggedIn$.subscribe(data => {
        this.isLoggedIn = data;
        this.isLoggedOut = !data;
      })
    }

    //set value to obs
  logout(){
    alert("you will be logged out");
    this.sharedDataService.LoggedOut(false);
    this.router.navigate(['/login']);
  }
}
