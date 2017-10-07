import { Component, OnInit } from '@angular/core';
import { AddGameService } from '../services/add-game.service'
import { ActivatedRoute } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.css']
})
export class GamePageComponent implements OnInit {
  game:Array<any> = []
  users:Array<any> = []
  gameId:number
  corresponds:boolean= true
  platformsGame:string = ''

  constructor(public add: AddGameService,
              public route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe((params) => this.gameId = Number(params['id']));
    this.getMainGame(this.gameId)
    this.getUsers(this.gameId)


  }

getMainGame(id){
  this.add.findGame(id)
      .subscribe(game =>{
        this.add.turnPic(game)
        this.add.bigScreenshot(game[0].screenshots)
        this.game = game
        this.checkPlatforms(this.game)
      })
}
getUsers(id){
  this.add.searchUser(id)
    .subscribe((users)=>{
      this.users = users
    })

}
setCurrent(elem, other){
    elem.classList.add('current')
    other.classList.remove('current')
    this.corresponds = !this.corresponds
}
checkPlatforms(game){
  const platforms = game[0].release_dates
  if(platforms.length > 1){
    this.platformsGame = 'MULTIPLATFORM'
  }else{
    switch(platforms[0]){
      case '48':
      this.platformsGame = "PlayStation"
      break;
      case '49':
      this.platformsGame = "Xbox"
      break;
      case '6':
      this.platformsGame = "PC"
      break;
      case '41':
      this.platformsGame = "Nintendo"
      break;
    }
  }
}
}
