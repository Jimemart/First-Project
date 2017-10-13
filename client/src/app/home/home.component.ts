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
  relevantGames:Array<object> = []
  youMayLike: Array<object> = []

  constructor( private auth:AuthService,
              private add:AddGameService,
              private getList: GetListService) { }

  ngOnInit() {
    this.auth.isLoggedIn()
          .subscribe(user =>{
            this.user = user
            this.myGamesId = this.user.games
            this.getGames(this.myGamesId)
            this.getGamesForPlat(this.user.platforms)
            this.getRelatedGames(this.getRandomId(this.user.games))
          })
  }

getRandomId(arr){
  var random = Math.floor(Math.random() * ((arr.length-1) - 1 ))
  return arr[random]
}

getGames(gamesArr){
  gamesArr.forEach(e =>{
    this.add.findGame(e)
            .subscribe(game =>{
              if(game[0]){
                this.add.turnPic(game)
                this.userGames.push(game[0])
              }
            })
  })
}

getGamesForPlat(platArr){
  platArr.forEach(plat =>{
      this.getList.getSuggestions(plat)
            .subscribe(games =>{
              this.add.turnPic(games)
              this.platRecom.push(
                {platform : this.transPlat(plat),
                 games : games})
            })
          })
}

getRelatedGames(game){

    this.getList.getSimilarGames(game)
        .subscribe(newGames =>{
          this.relevantGames.push(newGames)
          this.getInterested(this.relevantGames)
        })
}

getInterested(gameArr){
  gameArr[0].forEach(e =>{
    this.add.findGame(e)
            .subscribe(game =>{
              if(game[0]){
                console.log(game[0])
                this.add.turnPic(game)
                this.youMayLike.push(game[0])
              }
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
goToPage(game){
  this.add.navigateToGamePage(game)
}

}
