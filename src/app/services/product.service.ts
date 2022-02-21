import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http'
import { Observable, observable } from 'rxjs';
import { ProductModel } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  //apiURL
  apiURL = "https://localhost:5001/api/"

  constructor(private http:HttpClient) {}

  //HttpHeader
  httpOptions = {
    headers : new HttpHeaders({
      'Content-Type': 'application/Json',
      'Accept': 'application/Json'
    })
  }

  //อ่านข้อมูลทั้งหมดของ Product (methodGet)
  getProducts() : Observable<ProductModel>{
    return this.http.get<ProductModel>(this.apiURL + 'Product')
  }

  //อ่านข้อมูล ProductbyID (methodGet)
  getProduct(id: string) : Observable<ProductModel>{
    return this.http.get<ProductModel>(this.apiURL + 'Product/' + id)
  }

  //เพิ่มสินค้าใหม่ (methodPost)
  createProduct(product: any) : Observable<ProductModel>{
    return this.http.post<ProductModel>(this.apiURL + 'Product',JSON.stringify(product),this.httpOptions)
  }

  //แก้ไขข้อมูลสินค้า (methodPut)
  updateProduct(id: string, product: any) : Observable<ProductModel>{
    return this.http.put<ProductModel>(this.apiURL+ 'Product/' + id,JSON.stringify(product),this.httpOptions)
  }

  //ลบรายการสินค้า (methodDelete)
  deleteProduct(id: string){
    return this.http.delete<ProductModel>(this.apiURL + 'Product/' + id,this.httpOptions)
  }
}
