import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { User } from '../models/user.model';
import { DataService } from '../data.service';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

user!:User;

  submitted = false;

  constructor(private ds:DataService,private router:Router,  private userService:UserService) { }


  RegisterationForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('',[Validators.required,emailDomainValidator]),
    password: new FormControl('',[Validators.required, Validators.minLength(6)])
  });

  get f(){
    return this.RegisterationForm.controls;
  }

  submit(){
    this.submitted = true;
    if (this.RegisterationForm.valid) {
      console.table(this.RegisterationForm.value);
      const { firstName, lastName, email, password } = this.RegisterationForm.value;
      const userToAdd = new User(firstName, lastName, email, password);
        // Create a new User instance
      this.userService.createNewUser(userToAdd)
      .subscribe({
        next:(response:any)=>{
          alert(response.message);
          this.router.navigate(['/login']);
        },
        error: err=>alert(err)
      })




    }

  }

}

//Custom validation for mail
export function emailDomainValidator(control: AbstractControl):ValidationErrors | null{
  let email = control.value;
  if(email && email.indexOf("@")!=-1){
    let[_,domain] = email.split("@");
    if(domain!== "gmail.com"){
      return{
        emailDomain:{
          parseDomain:domain

        }
      }
    }
  }
  return null;

}

