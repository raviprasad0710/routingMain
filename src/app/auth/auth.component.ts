import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {

  constructor(private authService: AuthService) { }

  isLoginMode: boolean = true
  error:string=null
  email: string = '/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/'


  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode
    // console.log(this.loginForm.value); 
    this.loginForm.reset()
  }

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email,Validators
      .pattern('/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/')]),
    password: new FormControl('', [Validators.required]),
  })

  login() {
    if (this.loginForm.invalid) {
      return;
    }
    const email = this.loginForm.value.email
    const password = this.loginForm.value.password

    if (this.isLoginMode) {
      
      this.authService.signin(email,password).subscribe((resSign)=>{
        console.log(resSign);
        window.localStorage.setItem("token",resSign.idToken);   
        window.localStorage.setItem("token1",resSign.refreshToken);        
        window.localStorage.setItem("local token",resSign.localId);      
     
      });
    }
    else {
      this.authService.signup(email, password).subscribe((resData) => {
        console.log(resData);
      }, errRes => {
        switch(errRes.error.error.message){
          case 'EMAIL_EXISTS':
            // this.error="This email already exists."
            alert("This email already exists.")
        }
        // this.error=errRes.error.error.message
        // alert("Email Already Exists"+this.error)
        // console.log(err.error.error.message);

      })
    }


    this.loginForm.reset()
  }



}
