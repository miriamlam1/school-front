import { Component, OnInit } from '@angular/core';
import { BodyAPI } from './upload.component.service';
import { Validators,FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})

export class UploadComponent {

  constructor(private bodyAPI:BodyAPI) {}

  ImageForm = new FormGroup({});

  url = '';
  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = event.target.result as string;
        console.log(this.url);
      }
    }
  }

  onSubmit(){
    this.bodyAPI.addBody(`{ "URN": "test.png",
      "photoBase64": "`+ this.url + `"
    }`)
    .subscribe(data => {
      console.log(data)
    })      

    this.revert();
  }
  
  revert(){
    this.url = '';
  }

}
