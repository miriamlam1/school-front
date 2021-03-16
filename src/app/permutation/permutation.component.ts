import { Component } from '@angular/core';
import { Validators,FormControl, FormGroup } from '@angular/forms';
import { BodyAPI } from './permutation.component.service';

@Component({
  selector: 'app-permutation',
  templateUrl: './permutation.component.html',
  styleUrls: ['./permutation.component.css']
})
export class PermutationComponent{

  constructor(private bodyAPI:BodyAPI) {}

  PermForm = new FormGroup({
    URN: new FormControl('', [Validators.required]),
    color: new FormControl('', [Validators.required]),
    pattern: new FormControl('', [Validators.required]),
    clothing_type: new FormControl('', [Validators.required])
  });

  onSubmit(){

    this.bodyAPI.addBody(JSON.stringify(this.PermForm.value))
    .subscribe(data => {
      console.log(data)
    })      

    this.revert();
  }

  revert(){
    this.PermForm.reset();
  }

}