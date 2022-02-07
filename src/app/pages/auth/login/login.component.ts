import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  //Form Validation
  loginForm!: FormGroup
  submitted : boolean = false
  msgStatus : string = ''

  userData = {
    "username" : "",
    "password" : ""
  }

  constructor(
    private FormBuilder : FormBuilder, 
    private http : UserService,
    private route : Router
     ) { }

  ngOnInit(): void {
    //validate form
    this.loginForm = this.FormBuilder.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  //ฟังชั่น sumbitlogin
  submitLogin(){
    this.submitted = true
    if(this.loginForm.valid){
      this.userData.username = this.loginForm.value.username,
      this.userData.password = this.loginForm.value.password
      //console.log(this.userData)


      //เรียกใช้งาน API
      this.http.LogIn(this.userData).subscribe((data: {}) => {
      //console.log(data)
      if(data != ""){
        this.msgStatus = "<p class='alert  alert-success text-center'>Login Success</p>"
        this.route.navigate(['backend'])
      }else{
        this.msgStatus = "<p class='alert  alert-danger text-center'>Login Fail</p>"
      }
      })
    }
  }

  

}
