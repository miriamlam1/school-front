import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import {  Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { UploadComponent } from './upload/upload.component';
import { LabelComponent } from './label/label.component';
import { SchoolAdminContactComponent } from './school-admin-contact/school-admin-contact.component';
import { SchoolFormComponent } from './school-form/school-form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/components/login/login.component';
import { HeaderComponent } from './shared/components/header/header.component' ;
import { RegisterComponent } from './auth/components/register/register.component';
import { SettingsComponent } from './settings/settings.component';



const ROUTES: Routes = [
  { path: '', component: LoginComponent},
  { path: 'home', component: HomeComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'settings', component: SettingsComponent} 
];

@NgModule({
  declarations: [
    AppComponent,
    UploadComponent,
    LabelComponent,
    SchoolAdminContactComponent,
    SchoolFormComponent,
    HomeComponent,
    LoginComponent,
    HeaderComponent,
    RegisterComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
