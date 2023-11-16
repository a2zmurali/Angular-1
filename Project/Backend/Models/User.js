/*class User{
  _firstName;
  _lastName;
  _email;
  _password;
  
    constructor(_firstName, _lastName, _email, _password){
      this._firstName = _firstName;
      this._lastName = _lastName;
      this._email = _email;
      this._password = _password;
    }
  } */


  
  class User {
    _firstName;
   _lastName;
   _email;
   _password;
  
    get firstName() {
      return this._firstName;
    }
    set firstName(value) {
      this._firstName = value;
    }
  
    get lastName() {
      return this._lastName;
    }
    set lastName(value) {
      this._lastName = value;
    }
  
    get email(){
      return this._email;
    }
    set email(value) {
      this._email = value;
    }
  
    get password() {
      return this._password;
    }
    set password(value) {
      this._password = value;
    }
  
    constructor(firstName , lastName, email, password){
      this.firstName = firstName;
      this.lastName = lastName;
      this.email = email;
      this.password = password;
    }
  }


  module.exports = User;
