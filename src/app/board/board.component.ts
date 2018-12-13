import {Component, ComponentFactoryResolver, OnInit, ViewChild} from '@angular/core';
import {IndoorMapService} from '../service/indoor-map.service';
import {IndoorMapDirective} from '../indoor-map.directive';
import {RoomComponent} from '../room/room.component';
import {BeaconComponent} from '../beacon/beacon.component';
import {PositionMarkerComponent} from '../position-marker/position-marker.component';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  @ViewChild(IndoorMapDirective) indoorMap: IndoorMapDirective;
  rooms;
  beacons;
  position;
  constructor(private indoorMapService: IndoorMapService, private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.rooms = this.indoorMapService.getRooms();
    this.rooms.forEach(room => {
      this.loadComponent(room, RoomComponent);
    });
    this.beacons = this.indoorMapService.getBeacons();
    this.beacons.forEach(beacon => {
      this.loadComponent(beacon, BeaconComponent);
    });
    this.position = this.indoorMapService.getPosition();
    this.loadComponent(this.position, PositionMarkerComponent);
}

  loadComponent(data, typ) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(typ);
    const viewContainerRef = this.indoorMap.viewContainerRef;
    const componentRef = viewContainerRef.createComponent(componentFactory);
    // Assign only available properties to the instance of RoomComponent
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        (<RoomComponent>componentRef.instance)[key] = data[key];
      }
    }
  }
}
