import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GetListService } from './services/get-list.service'
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http'
import { GameListComponent } from './game-list/game-list.component';

@NgModule({
  declarations: [
    AppComponent,
    GameListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [GetListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
