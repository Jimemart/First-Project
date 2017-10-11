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
  nosearching = false
  myGames = [];
  constructor( public myService:GetListService,
               public auth:AuthService,
               public addService:AddGameService) { }

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


  showme(elem,cover){
    let index = this.addService.gamesToAdd.indexOf(elem.getAttribute('data-value'))
    if(index>=0){
      this.addService.gamesToAdd.splice(index,1)
      elem.classList.remove('selected')
      cover.classList.add('back')
    }else{
      this.addService.gamesToAdd.push(elem.getAttribute('data-value'))
      elem.classList.add('selected')
      cover.classList.remove('back')
    }

    }


  sendGames(){
    this.auth.gamesList = this.addService.gamesToAdd
    this.auth.secondStep = true
  }
  searchingGames(val){
    this.nosearching = val;

  }

}
