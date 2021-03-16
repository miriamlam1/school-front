import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
 
@Injectable({providedIn:'root'})
export class BodyAPI {
    //HttpTrigger1
  baseURL: string = "https://backendtestclient.azurewebsites.net/api/HttpImageBlob?";
 
  constructor(private http: HttpClient) {
  }
 
  addBody(bodyinfo:String): Observable<any> {
    const headers = { 'content-type': 'application/json'}
    const body = bodyinfo
    console.log(body)
    return this.http.post(this.baseURL, body,{'headers':headers})
  }
 
}