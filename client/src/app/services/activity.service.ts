import { Injectable, EventEmitter } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http} from '@angular/http';
import 'rxjs';
import {environment} from '../../environments/environment';
import {Router} from '@angular/router'

const BASE_URL = environment.BASE_URL
@Injectable()
export class ActivityService {

  private options = {withCredentials:true};
  constructor(public http: Http, public route:Router) { }


  addNewAct(obj){
    return this.http.post(`${BASE_URL}/api/add/activity`, {newAct : obj}, this.options)
        .map((res)=>res.json())
  }

  getActivitiesFromUser(id){
    return this.http.get(`${BASE_URL}/api/user/activity/${id}`, this.options)
          .map((res) => res.json() )
  }


}
