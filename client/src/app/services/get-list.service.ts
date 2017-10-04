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
    console.log(stringofPlat)
    
    return this.http.get(`${this.BASE_URL}/api/giveme/${stringofPlat}`)
          .map((res) => res.json())
  }

}
