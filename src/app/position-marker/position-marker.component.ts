import { Component, Input, OnInit } from '@angular/core';
import {xunit, yunit} from '../constants';

@Component({
  selector: 'app-position-marker',
  templateUrl: './position-marker.component.html',
  styleUrls: ['./position-marker.component.scss']
})
export class PositionMarkerComponent implements OnInit {

  @Input() status = 'normal';
  xunit;
  yunit;
  constructor() {
    this.xunit = xunit;
    this.yunit = yunit;
  }

  ngOnInit() {
  }

}
