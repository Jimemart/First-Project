import { Component, OnInit } from '@angular/core';
import { AddGameService } from '../services/add-game.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.css']
})
export class GamePageComponent implements OnInit {
  game:Array<any> = []
  users:Array<any> = []
  gameId:number
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
      })
}
getUsers(id){
  this.add.searchUser(id)
    .subscribe((users)=>{
      this.users = users
    })

}
}
