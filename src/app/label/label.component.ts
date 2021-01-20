import { Component, OnInit } from '@angular/core';

import { Label } from '../label';
import { LabelService } from '../label.service';
import { LABELS } from '../label_list';


@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.css']
})
export class LabelComponent implements OnInit {

  selectedLabel: Label;
  labels: Label[];

  constructor(private LabelService: LabelService) { }

  ngOnInit(): void {
    this.getLabels();
  }

  getLabels(): void {
    this.labels = this.LabelService.getLabels();
  }

}
