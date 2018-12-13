import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { RoomComponent } from './room/room.component';
import { PositionMarkerComponent } from './position-marker/position-marker.component';
import {IndoorMapService} from './service/indoor-map.service';
import {IndoorMapDirective} from './indoor-map.directive';
import { BeaconComponent } from './beacon/beacon.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    RoomComponent,
    PositionMarkerComponent,
    IndoorMapDirective,
    BeaconComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [IndoorMapService],
  entryComponents: [RoomComponent, BeaconComponent, PositionMarkerComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
