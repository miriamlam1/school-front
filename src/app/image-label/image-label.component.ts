import { Component } from '@angular/core';
import { Validators,FormControl, FormGroup } from '@angular/forms';
import { BodyAPI } from './image-label.component.service';

@Component({
  selector: 'app-image-label',
  templateUrl: './image-label.component.html',
  styleUrls: ['./image-label.component.css']
})
export class ImageLabelComponent{

  constructor(private bodyAPI:BodyAPI) {}

  AdminForm = new FormGroup({
    URN: new FormControl('', [Validators.required]),
    perm_id: new FormControl('', [Validators.required]),
    image_year: new FormControl('', [Validators.required]),
    season: new FormControl('', [Validators.required]),
    pe_kit: new FormControl('', [Validators.required])
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
