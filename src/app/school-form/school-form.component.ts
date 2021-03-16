import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup} from '@angular/forms';
import { BodyAPI } from './school-form.component.service';

@Component({
  selector: 'app-school-form',
  templateUrl: './school-form.component.html',
  styleUrls: ['./school-form.component.css']
})
export class SchoolFormComponent {

  constructor(private bodyAPI:BodyAPI) {}

  // Creates a FormFroup Object. For the school form
  // Makes all the fileds required before they are able to submit
  SchoolForm = new FormGroup({
    URN: new FormControl('', [Validators.required]),
    Institution_name: new FormControl('', [Validators.required]),
    phone_number: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    postcode: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    primary_key: new FormControl('', [Validators.required])

  })
  
  // On Submit convert the inputs as a json format
  // Call the revert function
  onSubmit(){

    this.bodyAPI.addBody(JSON.stringify(this.SchoolForm.value))
    .subscribe(data => {
      console.log(data)
    })      

    this.revert();
  }

  // Once form is submitted, clear all the cells
  revert(){
    this.SchoolForm.reset();
  }
}
