import { Injectable, EventEmitter } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http} from '@angular/http';
import 'rxjs';
import {environment} from '../../environments/environment';
import {Router} from '@angular/router'


@Injectable()
export class AddGameService {
  gamesToAdd = []
  BASE_URL: string = 'http://localhost:3000';
  constructor(public http:Http, public route: Router) { }

  findGame(game){
    return this.http.get(`${this.BASE_URL}/api/findone/${game}`)
            .map((res)=>res.json())
  }

  findInDb(gameId){
    return this.http.get(`${this.BASE_URL}/api/find/db/${gameId}`)
            .map((res)=>res.json())
  }

  saveGame(game){
    return this.http.post(`${this.BASE_URL}/api/save/game`, {game})
            .map((res)=> res.json())
  }

  searchGame(game){
    return this.http.get(`${this.BASE_URL}/api/search/${game}`)
              .map((res)=> res.json())
  }

  searchUser(gameId){
    return this.http.get(`${this.BASE_URL}/api/user/${gameId}`)
              .map((res)=>res.json())
  }

  turnPic(games){
    games.forEach(game =>{
      if(game.cover !== undefined){
      game.cover.url = game.cover.url.split("t_thumb").join("t_thumb_2x")
    }
  })
  }
  bigScreenshot(screenshot){
    screenshot.forEach(screen =>{
      screen.url = screen.url.split("t_thumb").join("t_screenshot_big")
    })
  }

  navigateToGamePage(game){
    game = game.getAttribute('data-value')
    this.route.navigate(['/game',game])
  }

}
