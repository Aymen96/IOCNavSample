import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-position-marker',
  templateUrl: './position-marker.component.html',
  styleUrls: ['./position-marker.component.scss']
})
export class PositionMarkerComponent implements OnInit {

  @Input() status = 'normal';

  constructor() { }

  ngOnInit() {
  }

}
