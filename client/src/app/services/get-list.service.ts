import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { Http } from '@angular/http'
import 'rxjs/add/operator/map'

@Injectable()
export class GetListService {

  BASE_URL: string = 'http://localhost:3000';
  constructor(public http:Http) { }

  getList(platforms){
    const stringofPlat = platforms.join("-")
    return this.http.get(`${this.BASE_URL}/api/giveme/${stringofPlat}/0/21`)
          .map((res) => res.json())
  }

  getSuggestions(platforms){
    return this.http.get(`${this.BASE_URL}/api/giveme/${platforms}/5/10`)
          .map((res) => res.json())
  }

}
