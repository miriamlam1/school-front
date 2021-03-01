import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { FormGroup, FormControl, Validators} from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router){

  }

  LoginForm = new FormGroup({
    Email: new FormControl('', [Validators.required]),
    Password: new FormControl('', [Validators.required])
  });

  onLogin(){
    if( this.getEmail() == this.LoginForm.value.Email && 
    this.getPassword() == this.LoginForm.value.Password)
    {
      this.router.navigate(['./home']);
      this.revert();

    }
  }

  getEmail(){
    return "festevez@calpoly.edu";
  }

  getPassword(){
    return "123456789";
  }

  revert(){
    this.LoginForm.reset();
  }
}
