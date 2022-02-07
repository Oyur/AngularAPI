import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConstantService } from './constant.service';
import { Observable } from 'rxjs';
import { userModel } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    })
  }

  constructor(private http: HttpClient, private constant: ConstantService) { }

  // Method สำหรับการเช็ค Login
  LogIn(data: any): Observable<userModel>{
    return this.http.post<userModel>(this.constant.baseAPIURL+ 'Authenticate/login', JSON.stringify(data), this.httpOptions)
  }
}
