import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { User } from '../_models/user.model';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url:string = environment.apiUrl;

  constructor(private http:HttpClient ) { }

  /*createNewUser(user:User){
    return this.http.post(this.url + '/createUser',user);
  }*/

  createNewUser(user:User):Observable<{message:string}>{
    return this.http.post<{message:string}>(this.url + '/createUser', user);

  }
  checkLogin(user:User):Observable<{message:string, token:string}>{
    return this.http.post<{message:string, token:string}>(`${this.url}/login`,user);
  }


  getUsers():Observable<User[]>{
    return this.http.get<User[]>(`${this.url}/getUsers`)
  }


}
