import {Component, Input, OnInit} from '@angular/core';
import {xunit, yunit} from '../constants';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {

  @Input() name;
  @Input() type;
  @Input() x;
  @Input() y;
  @Input() xdim;
  @Input() ydim;
  @Input() pos = 'down'; // left right top down
  @Input() isHorizontal = true;
  xunit;
  yunit;
  constructor() {
    this.xunit = xunit;
    this.yunit = yunit;
  }

  ngOnInit() {
  }

}
