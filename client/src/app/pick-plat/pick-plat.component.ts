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

  addPlat(elem,cover){
      let index = this.myPlats.indexOf(elem.getAttribute('data-value'))
      if(index >= 0){
        this.myPlats.splice(index,1)
        cover.classList.add('back')
        elem.classList.remove('selected')
      }else{
        this.myPlats.push(elem.getAttribute('data-value'))
        cover.classList.remove('back')
        elem.classList.add('selected')

      }
      console.log(cover)
  }
  sendAndNext(){
    this.auth.platList = this.myPlats
    this.auth.firstStep = true
  }
}
