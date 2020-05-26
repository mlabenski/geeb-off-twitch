import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { fromEventPattern } from 'rxjs';
import { CountdownModule } from 'ngx-countdown';


import { environment } from "src/environments/environment";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersService } from './shared/users.service';
import { TwitchVideoComponent } from './twitch-video/twitch-video.component';
import { CountdownComponent } from './countdown/countdown.component';
import { GameRoomComponent } from './game-room/game-room.component';

@NgModule({
  declarations: [
    AppComponent,
    TwitchVideoComponent,
    CountdownComponent,
    GameRoomComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    CountdownModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [UsersService, FormsModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
