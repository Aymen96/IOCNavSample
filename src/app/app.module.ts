import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { RoomComponent } from './room/room.component';
import { PositionMarkerComponent } from './position-marker/position-marker.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    RoomComponent,
    PositionMarkerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
