import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { Http } from '@angular/http'
import 'rxjs/add/operator/map'

@Injectable()
export class GetListService {

  BASE_URL: string = 'http://localhost:3000';
  constructor(public http:Http) { }

  getList(){
    return this.http.get(`${this.BASE_URL}/api/giveme`)
          .map((res) => res.json())
  }
}
