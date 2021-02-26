import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import {  RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { UploadComponent } from './upload/upload.component';
import { LabelComponent } from './label/label.component';
import { SchoolAdminContactComponent } from './school-admin-contact/school-admin-contact.component';
import { SchoolFormComponent } from './school-form/school-form.component';
import { AuthModule } from './auth/auth.module'
import { SharedModule } from './shared/shared.module';



@NgModule({
  declarations: [
    AppComponent,
    UploadComponent,
    LabelComponent,
    SchoolAdminContactComponent,
    SchoolFormComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AuthModule,
    SharedModule,
    RouterModule.forRoot([
      { path: " ", component: SharedModule}
    ])
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
