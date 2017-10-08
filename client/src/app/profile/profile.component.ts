import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service'
import { AddGameService } from '../services/add-game.service'
import { ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  LoggedUser:any
  profileUser:object


  userGames:Array<Object>=[]
  profileId:any
  myProfile:boolean = false;
  constructor(private auth:AuthService,
              private add:AddGameService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
        .subscribe((params)=> {
          this.profileId = params['id']
        })
    this.LoggedUser = this.auth.getUser()
    this.getProfileUser(this.profileId)
    this.checkIfMyProfile(this.auth.user['_id'])
    // this.getGames(this.profileUser['games'])
  }

  getProfileUser(id){
    this.add.searchProfile(id)
            .subscribe(user =>{
              this.profileUser = user
              this.getGames(this.profileUser['games'])
            })
  }

  getGames(gamesArr){
    gamesArr.forEach(e =>{
      this.add.findGame(e)
              .subscribe(game =>{
                this.add.turnPic(game)
                this.add.bigScreenshot(game[0].screenshots)
                this.userGames.push(game)
              })
              console.log('hola',this.userGames)
    })
}
checkIfMyProfile(userId){
  if(userId == this.profileId ){
    this.myProfile = true;
  }
}
}
