import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http'
import { Observable, observable } from 'rxjs';
import { ProductModel } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  //apiURL
  apiURL = "https://localhost:5001/api/Product"

  constructor(private http:HttpClient) {}

  //HttpHeader
  httpOptions = {
    headers : new HttpHeaders({
      'Content-Type': 'application/Json'
    })
  }

  //อ่านข้อมูล Product
  getProducts() : Observable<ProductModel>{
    return this.http.get<ProductModel>(this.apiURL)
  }
}
