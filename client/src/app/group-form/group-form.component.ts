import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AddGameService } from '../services/add-game.service'
import { AuthService } from '../services/auth.service'

@Component({
  selector: 'app-group-form',
  templateUrl: './group-form.component.html',
  styleUrls: ['./group-form.component.css']
})
export class GroupFormComponent implements OnInit {
@Output() onSave = new EventEmitter<boolean>();

  loggedUser = this.auth.user
  foundGames:Array<object> = []
  groupInfo = {
  groupname:"",
  platform:"",
  groupImage: "",
  gameId:0,
  gameName:"",
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
          console.log(game)
          this.add.bigScreenshot(game[0].screenshots)
          this.groupInfo.groupImage = game[0].screenshots[1].url
          this.groupInfo.gameId = game[0].id
          this.groupInfo.gameName = game[0].slug
          this.groupInfo.users.push(this.loggedUser['_id'])
        })
  }

  createGroup(){
    console.log("emitiendo")
    this.add.createGroup(this.groupInfo)
            .subscribe(group =>{
                this.onSave.emit(false)
            })
  }


}
