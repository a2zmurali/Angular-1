import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { User } from '../_models/user.model';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  user!:User;

  submitted = false;

  //Formgropu obj creation
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
    console.table(this.RegisterationForm.value);
    const { firstName, lastName, email, password } = this.RegisterationForm.value;
    const userToAdd = new User(firstName, lastName, email, password);

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
