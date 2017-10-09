import { Injectable, EventEmitter } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http} from '@angular/http';
import 'rxjs';
import {environment} from '../../environments/environment';
import {Router} from '@angular/router'

const BASE_URL = environment.BASE_URL

@Injectable()
export class EditUserService {
  

  constructor(private http:Http, private router:Router) { }

  addGame(userId, games){
    return this.http.post(`${BASE_URL}/api/hola`, {games, userId})
            .map(res => res.json())
            .catch(err =>{ throw err})
  }

  addUser(myId, updates){
    return this.http.post(`${BASE_URL}/api/follow/user`, {myId, updates})
            .map(res => res.json())
            .catch(err =>{ throw err})
  }
}
