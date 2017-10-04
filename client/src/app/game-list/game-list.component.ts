import { Component, OnInit } from '@angular/core';
import { GetListService } from '../services/get-list.service'
import { AuthService } from '../services/auth.service'


@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {
  games;
  myGames = [];
  constructor( public myService:GetListService, public auth:AuthService) { }

  ngOnInit() {
    this.myService.getList(this.auth.platList)
              .subscribe((games)=>{
                games.forEach(game =>{
                  if(game.cover){
                  game.cover.url = game.cover.url.split("t_thumb").join("t_thumb_2x")
                }
                })
                this.games = games

              })

  }


  showme(elem){
    let index = this.myGames.indexOf(elem.getAttribute('data-value'))
    if(index>0){
      this.myGames.splice(index,1)
      elem.classList.remove('selected')
    }else{
      this.myGames.push(elem.getAttribute('data-value'))
      elem.classList.add('selected')
    }
      }


  sendGames(){
    this.auth.gamesList = this.myGames
    console.log(this.auth.gamesList)
    this.auth.secondStep = true
  }

}
