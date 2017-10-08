import { Injectable, EventEmitter } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http} from '@angular/http';
import 'rxjs';
import {environment} from '../../environments/environment';
import {Router} from '@angular/router'

@Injectable()
export class EditUserService {
  BASE_URL: string = 'http://localhost:3000';

  constructor(private http:Http, private router:Router) { }

  addGame(userId, games){
    return this.http.post(`${this.BASE_URL}/api/hola`, {games, userId})
            .map(res => res.json())
            .catch(err =>{ throw err})
  }

  addUser(myId, updates){
    return this.http.post(`${this.BASE_URL}/api/follow/user`, {myId, updates})
            .map(res => res.json())
            .catch(err =>{ throw err})
  }
}
