import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { RoomComponent } from './room/room.component';
import { PositionMarkerComponent } from './position-marker/position-marker.component';
import {IndoorMapService} from './service/indoor-map.service';
import {IndoorMapDirective} from './indoor-map.directive';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    RoomComponent,
    PositionMarkerComponent,
    IndoorMapDirective,
  ],
  imports: [
    BrowserModule
  ],
  providers: [IndoorMapService],
  entryComponents: [RoomComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
