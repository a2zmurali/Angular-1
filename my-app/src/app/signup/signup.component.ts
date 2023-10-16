import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../models/user.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

user:User;

  submitted = false;

  RegisterationForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('',[Validators.required]),
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

    }

  }

}
