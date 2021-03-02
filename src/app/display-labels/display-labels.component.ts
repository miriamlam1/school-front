import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-labels',
  templateUrl: './display-labels.component.html',
  styleUrls: ['./display-labels.component.css']
})
export class DisplayLabelsComponent implements OnInit {
  //url = 'https://testuniformclassifier.documents.azure.com:443/';
  //url = 'http://clearforest.com/';
  //url = 'http://echo.jsontest.com/key/value/one/two'
  url = 'https://backendtestclient.azurewebsites.net/api/HttpTrigger1?';
  items = [];

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  test1 =  { color: 'red', pattern: 'solid', style: 'sweater'};

  constructor(private http: HttpClient) {

    console.log(this.http.post(this.url, this.test1, this.httpOptions));

    this.http.get(this.url).toPromise().then( data => {
      console.log(data);

      for (let key in data){
        if (data.hasOwnProperty(key))
          this.items.push(data[key]);
      }
    });
  }


  ngOnInit(): void {
  }

}
