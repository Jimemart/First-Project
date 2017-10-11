import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service'
import { AddGameService } from '../services/add-game.service'
import {Router} from '@angular/router'
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  formInfo = {
  username:"",
  password:"",
  email:"",
  games: [],
  platforms: []
}
  constructor( public auth:AuthService, public addGame:AddGameService, private router:Router) { }

  ngOnInit() {
    // this.addGame.gamesToAdd.forEach(game =>{
    //   this.addGame.findGame(game)
    //           .subscribe((element)=>{
    //             if(element !== "full"){
    //               console.log(element[0])
    //             this.addGame.saveGame(element[0])
    //                 .subscribe()
    //             }else{
    //               console.log("game is in db already")
    //             }
    //           })
    // })

  }
  signup(){
      this.formInfo.games = this.auth.gamesList
      this.formInfo.platforms = this.auth.platList
      const {username, password, email, games, platforms} = this.formInfo;
      if(username != "" && password != "" && email != ""){
        console.log(`Signup with ${username} ${password} ${email}`)
        this.auth.signup(username, password,email, games, platforms)
        .map(user => this.router.navigate(['/login']))
        .subscribe();
      } else{
        console.log("You must set a username and a password");
      }

    }
}
