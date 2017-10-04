import { Component, OnInit } from '@angular/core';
import { GetListService } from '../services/get-list.service'
import { AuthService } from '../services/auth.service'
import { AddGameService } from '../services/add-game.service'

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {
  games;
  totalGames;
  myGames = [];
  constructor( public myService:GetListService,
               public auth:AuthService,
               public addService:AddGameService) { }

  ngOnInit() {
    this.myService.getList(this.auth.platList)
              .subscribe((games)=>{
                this.totalGames = games
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
    if(index>=0){
      this.addService.gamesToAdd.splice(index,1)
      this.myGames.splice(index,1)
      elem.classList.remove('selected')
    }else{
      this.addService.gamesToAdd.push(elem.getAttribute('data-value'))
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
