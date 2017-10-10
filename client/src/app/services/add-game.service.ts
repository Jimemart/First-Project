import { Injectable, EventEmitter } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http} from '@angular/http';
import 'rxjs';
import {environment} from '../../environments/environment';
import {Router} from '@angular/router'

const BASE_URL = environment.BASE_URL
@Injectable()
export class AddGameService {
  gamesToAdd = []
  private options = {withCredentials:true};
  constructor(public http:Http, public route: Router) { }

  findGame(game){
    return this.http.get(`${BASE_URL}/api/findone/${game}`, this.options)
            .map((res)=>res.json())
  }

  findInDb(gameId){
    return this.http.get(`${BASE_URL}/api/find/db/${gameId}`, this.options)
            .map((res)=>res.json())
  }

  saveGame(game){
    return this.http.post(`${BASE_URL}/api/save/game`, {game}, this.options)
            .map((res)=> res.json())
  }

  searchGame(game){
    return this.http.get(`${BASE_URL}/api/search/${game}`, this.options)
              .map((res)=> res.json())
  }

  searchUser(gameId){
    return this.http.get(`${BASE_URL}/api/user/${gameId}`, this.options)
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

  searchProfile(id){
    return this.http.get(`${BASE_URL}/api/user/profile/${id}`, this.options)
              .map((res)=>res.json())
  }

  createGroup(groupInfo){
    return this.http.post(`${BASE_URL}/api/new/group`,{ groupInfo })
              .map((res)=>res.json())
  }

}
