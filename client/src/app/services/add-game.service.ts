import { Injectable, EventEmitter } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http} from '@angular/http';
import 'rxjs';
import {environment} from '../../environments/environment';

@Injectable()
export class AddGameService {
  gamesToAdd = []
  BASE_URL: string = 'http://localhost:3000';
  constructor(public http:Http) { }

  findGame(game){
    return this.http.get(`${this.BASE_URL}/api/findone/${game}`)
            .map((res)=>res.json())
  }
  
  findInDb(gameId){
    console.log("llego")
    console.log(gameId)
    return this.http.get(`${this.BASE_URL}/api/find/db/${gameId}`)
            .map((res)=>res.json())
  }



}
