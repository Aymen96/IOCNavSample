import {Component, Input, OnInit} from '@angular/core';
import {xunit, yunit} from '../constants';

@Component({
  selector: 'app-beacon',
  templateUrl: './beacon.component.html',
  styleUrls: ['./beacon.component.scss']
})
export class BeaconComponent implements OnInit {

  @Input() x;
  @Input() y;
  @Input()  status = 'normal';
  @Input() uuid = 'bAsi-7889';
  hover = false;
  xunit;
  yunit;
  constructor() {
    this.xunit = xunit;
    this.yunit = yunit;
  }
  ngOnInit() {
  }

}
