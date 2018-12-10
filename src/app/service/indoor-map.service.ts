import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IndoorMapService {

  constructor() { }

  getRooms() {
    return [
      {name: 'Room 1', x: 0, y: 0, xdim: 50, ydim: 20},
      {name: 'Room 2', x: 50, y: 50, xdim: 60, ydim: 30, isHorizontal: false, pos: 'right'},
      {name: 'Room 3', x: 100, y: 0, xdim: 40, ydim: 20},
    ];
  }
}
