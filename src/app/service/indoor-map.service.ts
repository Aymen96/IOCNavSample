import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IndoorMapService {

  constructor() { }

  getRooms() {
    return [
      {name: 'R100', y: 0, x: 0, xdim: 15, ydim: 20},
      {name: 'R101', y: 0, x: 15, xdim: 15, ydim: 20},
      {name: 'R102', y: 0, x: 30, xdim: 15, ydim: 20},
      {type: 'wc-men', y: 0, x: 45, xdim: 8, ydim: 20},
      {type: 'wc-handicap', y: 0, x: 53, xdim: 8, ydim: 20},
      {type: 'wc-women', y: 0, x: 61, xdim: 8, ydim: 20},
      {name: 'R102', y: 0, x: 69, xdim: 16, ydim: 20},
      {name: 'R102', y: 0, x: 85, xdim: 15, ydim: 40},

      {name: 'R100', y: 40, x: 0, xdim: 30, ydim: 20},
      {name: 'R101', y: 40, x: 30, xdim: 20, ydim: 20},
      {name: 'R102', y: 40, x: 50, xdim: 20, ydim: 20},

      {name: 'R100', y: 80, x: 0, xdim: 22, ydim: 20, pos: 'top'},
      {name: 'R101', y: 80, x: 22, xdim: 22, ydim: 20, pos: 'top'},
      {type: 'elevator', y: 80, x: 44, xdim: 12, ydim: 20, pos: 'top'},
      {name: 'R101', y: 80, x: 56, xdim: 22, ydim: 20, pos: 'top'},
      {name: 'R102', y: 80, x: 78, xdim: 22, ydim: 20, pos: 'top'},
    ];
  }

  getBeacons() {
    return [
      {
        x: 0,
        y: 20,
        uuid: 'bAsi-7889'
      },
      {
        x: 25,
        y: 34,
        uuid: 'bSek-5454'
      },
      {
        x: 50,
        y: 20,
        uuid: 'bJkd-2937'
      },
      {
        x: 70,
        y: 40,
        uuid: 'bHdg-9376'
      },
      {
        x: 85,
        y: 40,
        uuid: 'bSeh-3217',
        status: 'detected'
      },
      {
        x: 70,
        y: 55,
        uuid: 'bTys-6593',
        status: 'detected'
      },
      {
        x: 97,
        y: 74,
        uuid: 'bRwq-7394',
        status: 'detected'
      },
      {
        x: 50,
        y: 60,
        uuid: 'bMpd-5304'
      },
      {
        x: 24 ,
        y: 74,
        uuid: 'bAsi-2109'
      },
      {
        x: 0,
        y: 60,
        uuid: 'bWer-7293'
      }
    ];
  }

  getPosition() {
    return {x: 90, y: 50};
  }
}
