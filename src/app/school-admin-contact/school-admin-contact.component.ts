import { Component } from '@angular/core';
import { Validators,FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-school-admin-contact',
  templateUrl: './school-admin-contact.component.html',
  styleUrls: ['./school-admin-contact.component.css']
})
export class SchoolAdminContactComponent {


  AdminForm = new FormGroup({
    FirstName: new FormControl('', [Validators.required]),
    LastName: new FormControl('', [Validators.required]),
    Email: new FormControl('', [Validators.required]),
    PhoneNumber: new FormControl('', [Validators.required]),
    SchoolPosition: new FormControl('', [Validators.required])
  });

  onSubmit(){
    console.log(JSON.stringify(this.AdminForm.value));
    this.revert();
  }

  revert(){
    this.AdminForm.reset();
  }

}
