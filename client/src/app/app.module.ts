import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GetListService } from './services/get-list.service'
import { AuthService } from './services/auth.service'
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http'
import { FormsModule } from '@angular/forms';
import { GameListComponent } from './game-list/game-list.component';

@NgModule({
  declarations: [
    AppComponent,
    GameListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
  ],
  providers: [GetListService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
