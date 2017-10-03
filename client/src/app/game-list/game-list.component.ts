import { Component, OnInit } from '@angular/core';
import { GetListService } from '../services/get-list.service'
import { AuthService } from '../services/auth.service'

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {
  formInfo = {
  username:"",
  password:"",
  email:"",
}
  games;
  myGames = [];
  constructor( public myService:GetListService, public auth:AuthService) { }

  ngOnInit() {
    this.myService.getList()
              .subscribe((games)=>{
                games.forEach(game =>{
                  game.cover.url = game.cover.url.split("t_thumb").join("t_thumb_2x")
                })
                this.games = games

              })
  }

  signup(){
      const games = this.myGames;
      const {username, password, email} = this.formInfo;
      if(username != "" && password != "" && email != ""){
        console.log(`Signup with ${username} ${password} ${email}`)
        this.auth.signup(username, password,email, games)
        .map(user => console.log(user))
        .subscribe();
      } else{
        console.log("You must set a username and a password");
      }
    }
  showme(elem){
    console.log(elem.getAttribute('data-value'))
    this.myGames.push(elem.getAttribute('data-value'))
    elem.classList.add("selected")
  }

}
