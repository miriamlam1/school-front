import { Component } from '@angular/core';
import { Validators,FormControl, FormGroup } from '@angular/forms';
import { BodyAPI } from './school-admin-contact.component.service';

@Component({
  selector: 'app-school-admin-contact',
  templateUrl: './school-admin-contact.component.html',
  styleUrls: ['./school-admin-contact.component.css']
})
export class SchoolAdminContactComponent{

  constructor(private bodyAPI:BodyAPI) {}

  AdminForm = new FormGroup({
    URN: new FormControl('', [Validators.required]),
    first_name: new FormControl('', [Validators.required]),
    last_name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    phone_number: new FormControl('', [Validators.required]),
    position: new FormControl('', [Validators.required])
  });

  onSubmit(){

    this.bodyAPI.addBody(JSON.stringify(this.AdminForm.value))
    .subscribe(data => {
      console.log(data)
    })      

    this.revert();
  }

  revert(){
    this.AdminForm.reset();
  }

}
