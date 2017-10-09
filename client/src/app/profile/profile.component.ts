import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service'
import { AddGameService } from '../services/add-game.service'
import { ActivatedRoute } from '@angular/router'
import{ EditUserService } from '../services/edit-user.service'
import{ GroupService } from '../services/group.service'
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  LoggedUser:any
  profileUser:object
  notfollow:boolean = true
  userGroups:number

  userGames:Array<Object>=[]
  profileId:any
  myProfile:boolean = false;
  constructor(private auth:AuthService,
              private add:AddGameService,
              private route: ActivatedRoute,
              private edit: EditUserService,
              private groupService: GroupService) { }

  ngOnInit() {
    this.route.params
        .subscribe((params)=> {
          this.profileId = params['id']
        })
    this.LoggedUser = this.auth.getUser()
    this.getProfileUser(this.profileId)
    this.checkIfMyProfile(this.auth.user['_id'])
    this.checkIfFollow()
    this.route.params
        .subscribe((params)=> {
          this.profileId = params['id']
          this.getUserGroups(this.profileId)
        })
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
    })
}
checkIfMyProfile(userId){
  if(userId == this.profileId ){
    this.myProfile = true;
  }
}
checkIfFollow(){
  this.LoggedUser.friends.forEach(friend =>{
    if(friend == this.profileId){
      this.notfollow = false
    }
  })
}

followUser(){
  this.notfollow = false
   this.LoggedUser.friends.push( this.profileId)
   this.edit.addUser( this.LoggedUser._id, this.LoggedUser.friends)
            .subscribe()
}


getUserGroups(id){
  this.groupService.getUserGroups(id)
      .subscribe(groups =>{
        this.userGroups = groups.length
        console.log(this.userGroups)
      })
}
}
