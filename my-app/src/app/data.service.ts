import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './models/product.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private url= "http://localhost:3000"
  constructor(private http:HttpClient) { }

  getData(){
    return "data";
  }

 /* getProducts():Observable<any[]>{
    return this.http.get<any[]>(`${this.url}/products`)
  } */

getProducts(category:string):Observable<Product[]>{

  const parameter = new HttpParams().set("category",category);

    return this.http.get<Product[]>(`${this.url}/products`,{'params':parameter})
  }
}
