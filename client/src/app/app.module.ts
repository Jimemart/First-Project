import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GetListService } from './services/get-list.service'
import { AuthService } from './services/auth.service'
import { AddGameService } from './services/add-game.service'
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http'
import { FormsModule } from '@angular/forms';
import { GameListComponent } from './game-list/game-list.component';
import { SignupComponent } from './signup/signup.component';
import { Routes } from "@angular/router";
import { RouterModule } from '@angular/router';
import {routes} from './routes';

import { MultiformComponent } from './multiform/multiform.component';
import { PickPlatComponent } from './pick-plat/pick-plat.component';
import {IsLoggedInService} from './services/isLoggedIn.canactivate.service'
import { ProfileComponent } from './profile/profile.component';
import { LogInComponent } from './log-in/log-in.component';

@NgModule({
  declarations: [
    AppComponent,
    GameListComponent,
    SignupComponent,
    MultiformComponent,
    PickPlatComponent,
    ProfileComponent,
    LogInComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [GetListService, AuthService, IsLoggedInService, AddGameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
