import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IndoorMapService {

  constructor() { }

  getRooms() {
    return [
      {name: 'R100', x: 0, y: 0, xdim: 50, ydim: 40},
      {name: 'R101', x: 50, y: 0, xdim: 55, ydim: 40},
      {name: 'R102', x: 145, y: 0, xdim: 55, ydim: 40},
      {name: 'R103', x: 0, y: 80, xdim: 50, ydim: 40, pos: 'top'},
      {name: 'R104', x: 50, y: 80, xdim: 55, ydim: 40, pos: 'top'},
      {name: 'R105', x: 145, y: 80, xdim: 55, ydim: 40, pos: 'top'},
      {name: 'R106', x: 0, y: 160, xdim: 50, ydim: 40, pos: 'top'},
      {name: 'R107', x: 50, y: 160, xdim: 55, ydim: 40, pos: 'top'},
      {name: 'R108', x: 145, y: 160, xdim: 55, ydim: 40, isHorizontal: false , pos: 'left'},
    ];
  }
}
