import { Component, OnInit } from '@angular/core';
import { AddGameService } from '../services/add-game.service'
import { AuthService } from '../services/auth.service'

@Component({
  selector: 'app-group-form',
  templateUrl: './group-form.component.html',
  styleUrls: ['./group-form.component.css']
})
export class GroupFormComponent implements OnInit {
  loggedUser = this.auth.user
  foundGames:Array<object> = []
  groupInfo = {
  groupname:"",
  platform:"",
  groupImage: "",
  gameId:0,
  users: []
}
  searchBar:string
  constructor(private add:AddGameService,
              private auth: AuthService) { }

  ngOnInit() {
  }
  searchGame(){
    this.add.searchGame(this.searchBar)
            .subscribe(found => {
              found.body.forEach(game =>{
                if(game.cover){
                game.cover.url = game.cover.url.split("t_thumb").join("t_thumb_2x")
              }
              })
              this.foundGames = found.body
            })
  }

  selected(elem){
    const id = elem.getAttribute('data-value')
    this.add.findGame(id)
        .subscribe(game =>{
          this.add.bigScreenshot(game[0].screenshots)
          this.groupInfo.groupImage = game[0].screenshots[1].url
          this.groupInfo.gameId = game[0].id
          this.groupInfo.users.push(this.loggedUser['_id'])
          console.log(this.groupInfo)
        })
  }

  createGroup(){
    this.add.createGroup(this.groupInfo)
            .subscribe()
  }


}
