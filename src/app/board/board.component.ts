import {Component, ComponentFactoryResolver, OnInit, ViewChild} from '@angular/core';
import {IndoorMapService} from '../service/indoor-map.service';
import {IndoorMapDirective} from '../indoor-map.directive';
import {RoomComponent} from '../room/room.component';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  @ViewChild(IndoorMapDirective) indoorMap: IndoorMapDirective;
  rooms;
  constructor(private indoorMapService: IndoorMapService, private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.rooms = this.indoorMapService.getRooms();
    this.rooms.forEach(room => {
      this.loadComponent(room);
    });
}

  loadComponent(room) {

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(RoomComponent);

    const viewContainerRef = this.indoorMap.viewContainerRef;

    const componentRef = viewContainerRef.createComponent(componentFactory);
    // Assign only available properties to the instance of RoomComponent
    for (const key in room) {
      if (room.hasOwnProperty(key)) {
        (<RoomComponent>componentRef.instance)[key] = room[key];
      }
    }
    console.log((<RoomComponent>componentRef.instance));
  }
}
