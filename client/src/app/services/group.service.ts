import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http} from '@angular/http';
import 'rxjs';
import {environment} from '../../environments/environment';
import {Router} from '@angular/router'

const BASE_URL = environment.BASE_URL
@Injectable()
export class GroupService {
  
  private options = {withCredentials:true};
  constructor(public http:Http, public route: Router) { }


  getUserGroups(id){
    return this.http.get(`${BASE_URL}/api/groups/user/${id}`, this.options)
              .map(res => res.json())
  }

  getGroup(id){
    return this.http.get(`${BASE_URL}/api/get/group/${id}`, this.options)
              .map(res => res.json())
  }

  addUser(updates, id){
    return this.http.post(`${BASE_URL}/api/group/add/user`, {updates, id}, this.options)
              .map(res => res.json())
  }

  getGroupsOfSameGame(id){
    return this.http.get(`${BASE_URL}/api/common/groups/${id}`, this.options)
              .map(res => res.json())
  }
}
