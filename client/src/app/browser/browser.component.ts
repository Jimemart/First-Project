import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service'
import { AddGameService } from '../services/add-game.service'
import { GetListService } from '../services/get-list.service'

@Component({
  selector: 'app-browser',
  templateUrl: './browser.component.html',
  styleUrls: ['./browser.component.css']
})
export class BrowserComponent implements OnInit {
  foundGames:Array<object> = []
  searchBar:string
  foundUsers:Array<object> = []
  foundGroups:Array<object> =[]
  constructor( public auth:AuthService, public add:AddGameService, public getList:GetListService) { }

  ngOnInit() {
  }

  searchAll(){
    this.searchGame()
    this.searchUser()
    this.searchGroup()
  }
  searchGame(){
      this.add.searchGame(this.searchBar)
            .subscribe(found => {
              found.body.forEach(game =>{
                if(game.cover){
                game.cover.url = game.cover.url.split("t_thumb").join("t_thumb_2x")
                // game.screenshots = game.screenshots[2].url.split("t_thumb").join("t_thumb_2x")
              }
              })
              this.foundGames = found.body

            })
  }

  searchUser(){
    this.getList.browseUsers(this.searchBar)
                .subscribe(users =>{
                  this.foundUsers = users

                })
  }
  searchGroup(){
    this.getList.browseGroups(this.searchBar)
                .subscribe(users =>{
                  this.foundGroups = users
                  console.log(this.foundGroups)
                })
  }

}
