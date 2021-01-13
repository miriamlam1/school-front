import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { UploadComponent } from './upload/upload.component';
import { LabelComponent } from './label/label.component';

const routes: Routes = [
  // { path: 'upload', component: UploadComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    UploadComponent,
    LabelComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
