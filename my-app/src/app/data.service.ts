import { UserService } from './services/user.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './models/product.model';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private url:string =environment.apiUrl;
  headers:HttpHeaders;
  constructor(private http:HttpClient, private userService:UserService ) { }


 /* getProducts():Observable<any[]>{
    return this.http.get<any[]>(`${this.url}/products`)
  } */

getProducts(category:string):Observable<Product[]>{

  this.headers = new HttpHeaders()
    .set('Authorization', `${this.userService.getToken()}`);

  const parameter = new HttpParams().set("category",category);

    return this.http.get<Product[]>(`${this.url}/products`,{ 'headers':this.headers,'params':parameter})
  }


  getData(){
    return "data";
  }

  updateProduct(product:Product):Observable<Product>{
    return this.http.put<Product>(this.url + '/products', product);
  }


}
