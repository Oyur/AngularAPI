import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantService {

  //กำหนด path URL สำหรับเรียก API
  baseAPIURL = "https://localhost:5001/api/"

  constructor() { }
}
