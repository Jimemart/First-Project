import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http} from '@angular/http';
import 'rxjs';
import {environment} from '../../environments/environment';
import {Router} from '@angular/router'

const BASE_URL = environment.BASE_URL
@Injectable()
export class GroupService {

  constructor(public http:Http, public route: Router) { }


  getUserGroups(id){
    return this.http.get(`${BASE_URL}/api/groups/user/${id}`)
              .map(res => res.json())
  }

  getGroup(id){
    return this.http.get(`${BASE_URL}/api/get/group/${id}`)
              .map(res => res.json())
  }
}
