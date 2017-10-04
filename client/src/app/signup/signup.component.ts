import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service'
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
  constructor( public auth:AuthService) { }

  ngOnInit() {
  }
  signup(){
      this.formInfo.games = this.auth.gamesList
      this.formInfo.platforms = this.auth.platList
      const {username, password, email, games, platforms} = this.formInfo;
      if(username != "" && password != "" && email != ""){
        console.log(`Signup with ${username} ${password} ${email}`)
        this.auth.signup(username, password,email, games, platforms)
        .map(user => console.log(user))
        .subscribe();
      } else{
        console.log("You must set a username and a password");
      }
    }
}
