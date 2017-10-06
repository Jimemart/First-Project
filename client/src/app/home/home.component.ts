import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service'
import { AddGameService } from '../services/add-game.service'
import { GetListService } from '../services/get-list.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user:any
  myGamesId:Array<string>=[]
  userGames: Array<Object> = []
  platRecom: Array<Object> = []
  platformsName:Array<string> = []
  constructor( private auth:AuthService,
              private add:AddGameService,
              private getList: GetListService) { }

  ngOnInit() {
    this.user = this.auth.user
    this.myGamesId = this.user.games
    this.getGames(this.myGamesId)
    this.getGamesForPlat(this.user.platforms)
  }

getGames(gamesArr){
  gamesArr.forEach(e =>{
    this.add.findInDb(e)
            .subscribe(game =>{
              this.userGames.push(game)
            })
  })
}

getGamesForPlat(platArr){
  platArr.forEach(plat =>{
      this.getList.getSuggestions(plat)
            .subscribe(games =>{
              games.forEach(game =>{
                if(game.cover !== undefined){
                game.cover.url = game.cover.url.split("t_thumb").join("t_thumb_2x")
                }
              })
              this.platRecom.push(
                {platform : this.transPlat(plat),
                 games : games})
            })
          })
}

transPlat(num){
    let translation = ""
    switch(num){
      case '48':
      translation = "PlayStation"
      break;
      case '49':
      translation = "Xbox"
      break;
      case '6':
      translation = "PC"
      break;
      case '41':
      translation = "Nintendo"
      break;
  }
  return translation
}

}
