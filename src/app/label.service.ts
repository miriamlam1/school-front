import { Injectable } from '@angular/core';
import { LABELS } from './label_list';
import { Label } from './label';

@Injectable({
  providedIn: 'root'
})
export class LabelService {

  constructor() { }

  getLabels(): Label[] {
    return LABELS;
  }
}
