import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-school-form',
  templateUrl: './school-form.component.html',
  styleUrls: ['./school-form.component.css']
})
export class SchoolFormComponent {

  // Creates a FormFroup Object. For the school form
  // Makes all the fileds required before they are able to submit
  SchoolForm = new FormGroup({
    InstitutionName: new FormControl('', [Validators.required]),
    PhoneNumber: new FormControl('', [Validators.required]),
    Address: new FormControl('', [Validators.required]),
    Postcode: new FormControl('', [Validators.required]),
    City: new FormControl('', [Validators.required])
  })
  
  // On Submit convert the inputs as a json format
  // Call the revert function
  onSubmit(){
    console.log(JSON.stringify(this.SchoolForm.value));
    this.revert();
  } 

  // Once form is submitted, clear all the cells
  revert(){
    this.SchoolForm.reset();
  }
}
