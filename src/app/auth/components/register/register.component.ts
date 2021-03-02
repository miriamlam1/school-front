import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private router: Router){

  }
  RegisterForm = new FormGroup({
    FirstName: new FormControl('', [Validators.required]),
    Lastname: new FormControl('', [Validators.required]),
    Email: new FormControl('', [Validators.required]),
    Password: new FormControl('', [Validators.required])
  });

  onRegister(){
    this.router.navigate(['./home']);
  }
}
