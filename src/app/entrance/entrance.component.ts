import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-entrance',
  templateUrl: './entrance.component.html',
  styleUrls: ['./entrance.component.scss']
})
export class EntranceComponent implements OnInit {

  @Input() x = 0;
  @Input() y = 0;
  @Input() direction;
  constructor() { }

  ngOnInit() {
  }

}
