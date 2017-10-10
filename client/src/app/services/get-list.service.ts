import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { Http } from '@angular/http'
import 'rxjs/add/operator/map'
import {environment} from '../../environments/environment';

const BASE_URL = environment.BASE_URL

@Injectable()
export class GetListService {

  private options = {withCredentials:true};
  constructor(public http:Http) { }

  getList(platforms){
    const stringofPlat = platforms.join("-")
    return this.http.get(`${BASE_URL}/api/giveme/${stringofPlat}/10/21`, this.options)
          .map((res) => res.json())
  }

  getSuggestions(platforms){
    return this.http.get(`${BASE_URL}/api/giveme/${platforms}/8/10`, this.options)
          .map((res) => res.json())
  }

  getSimilarGames(id){
    return this.http.get(`${BASE_URL}/api/find/game/${id}`, this.options)
            .map((res)=>res.json())
  }
}
