import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service'
import { AddGameService } from '../services/add-game.service'
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  myUser:any
  myGamesId:Array<string>=[]
  userGames:Array<Object>=[]
  constructor(private auth:AuthService, private add:AddGameService) { }

  ngOnInit() {
    // this.auth.isLoggedIn().subscribe()
    this.myUser = this.auth.getUser()
    this.myGamesId = this.myUser.games
    this.getGames(this.myGamesId)

  }


  getGames(gamesArr){
    gamesArr.forEach(e =>{
      this.add.findGame(e)
              .subscribe(game =>{
                this.add.turnPic(game)
                this.userGames.push(game)
              })
    })
}
}
