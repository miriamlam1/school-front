import { Component, OnInit } from '@angular/core';
import { BodyAPI } from './upload.component.service';
import { Validators,FormControl, FormGroup } from '@angular/forms';
import { SchoolFormComponent } from '../school-form/school-form.component';
import { NONE_TYPE } from '@angular/compiler';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})

export class UploadComponent {

  constructor(private bodyAPI:BodyAPI) {}

  ImageForm = new FormGroup({});

  filename : File = null

  url = '';
  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      this.filename = event.target.files[0];
      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = event.target.result as string;
        console.log(this.url);
        
      }
    }
  }

  onSubmit(){
    var jsonobj = {
      "URN": this.filename.name,
      "photoBase64": this.url
    }
    this.bodyAPI.addBody(JSON.stringify(jsonobj))
    .subscribe(data => {
      console.log(data)
    })      

    this.revert();
  }
  
  revert(){
    this.url = '';
  }

}
