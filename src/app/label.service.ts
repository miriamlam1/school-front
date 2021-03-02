// import { Injectable } from '@angular/core';
// import { LABELS } from './label_list';
// import { Label } from './label';


// @Injectable({
//   providedIn: 'root'
// })
// export class LabelService {

//   constructor() { }

//   getLabels(): Label[] {
//     return LABELS;
//   }
// }

import { Injectable } from '@angular/core';
import { LABELS } from './label_list';
import { Label } from './label';
import { HttpClient } from '@angular/common/http';

const api = '/api';

@Injectable({
  providedIn: 'root'
})
export class LabelService {

  constructor(private http: HttpClient) { }

  getLabels() {
    return this.http.get<Array<Label>>(`${api}/labels`);
    //return LABELS;
  }
}
