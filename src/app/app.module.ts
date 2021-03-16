import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import {  Routes, RouterModule } from '@angular/router';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';

import { UploadComponent } from './upload/upload.component';
import { LabelComponent } from './label/label.component';
import { DisplayLabelsComponent } from './display-labels/display-labels.component';
import { SchoolAdminContactComponent } from './school-admin-contact/school-admin-contact.component';
import { SchoolFormComponent } from './school-form/school-form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/components/login/login.component';
import { HeaderComponent } from './shared/components/header/header.component' ;
import { RegisterComponent } from './auth/components/register/register.component';
import { SettingsComponent } from './settings/settings.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { MessagesComponent } from './messages/messages.component';
import { PermutationComponent } from './permutation/permutation.component';
import { ImageLabelComponent } from './image-label/image-label.component';

const ROUTES: Routes = [
  { path: '', component: LoginComponent},
  { path: 'home', component: HomeComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'settings', component: SettingsComponent},
  { path: 'schoolForm', component: SchoolFormComponent},
  { path: 'contactForm', component: SchoolAdminContactComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    UploadComponent,
    LabelComponent,
    DisplayLabelsComponent,
    HeroesComponent,
    SchoolAdminContactComponent,
    SchoolFormComponent,
    HomeComponent,
    LoginComponent,
    HeaderComponent,
    RegisterComponent,
    SettingsComponent,
    DashboardComponent,
    HeroDetailComponent,
    MessagesComponent,
    HeroSearchComponent,
    PermutationComponent,
    ImageLabelComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(ROUTES),
    NgbModule,
    // HttpClientInMemoryWebApiModule.forRoot(
    //   InMemoryDataService, { dataEncapsulation: false }
    // )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
