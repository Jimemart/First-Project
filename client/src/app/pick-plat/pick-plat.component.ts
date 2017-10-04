import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service'

@Component({
  selector: 'app-pick-plat',
  templateUrl: './pick-plat.component.html',
  styleUrls: ['./pick-plat.component.css']
})
export class PickPlatComponent implements OnInit {
  myPlats=[]
  constructor(public auth:AuthService) { }

  ngOnInit() {
  }

  addPlat(elem){
      let index = this.myPlats.indexOf(elem.getAttribute('data-value'))
      if(index >= 0){
        this.myPlats.splice(index,1)
        elem.classList.remove('selected')
      }else{
        this.myPlats.push(elem.getAttribute('data-value'))
        elem.classList.add('selected')
      }

  }
  sendAndNext(){
    this.auth.platList = this.myPlats
    this.auth.firstStep = true
  }
}
