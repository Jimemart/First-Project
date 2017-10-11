import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import {environment} from '../../environments/environment';

const BASE_URL = environment.BASE_URL

@Injectable()
export class ChaService {

  private options = {withCredentials:true};
  constructor(private http: Http) { }

  saveMessage(message){
  return   this.http.post(`${BASE_URL}/api/save/message`, {message : message}, this.options)
                .map(res => res.json())
                .catch(err => {
                  throw err
                })
  }

  getRoomMessages(room){
    return this.http.get(`${BASE_URL}/api/chat/room/${room}`, this.options)
                    .map(res => res.json())
                    .catch(err => {
                      throw err
                    })
  }

}
