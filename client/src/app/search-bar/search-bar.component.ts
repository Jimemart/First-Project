import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../services/auth.service'
import { AddGameService } from '../services/add-game.service'

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  @Output() onFocus = new EventEmitter<boolean>();

  searchBar:string
  foundGames:Array<object> = []
  selectedGames:Array<string> = []
  constructor( public auth:AuthService, public add:AddGameService) { }

  ngOnInit() {
  }
  searchGame(){
    this.onFocus.emit(true)
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
      let index = this.add.gamesToAdd.indexOf(elem.getAttribute('data-value'))
      if(index>=0){
        this.add.gamesToAdd.splice(index,1)
        elem.classList.remove('selected')
      }else{
        this.add.gamesToAdd.push(elem.getAttribute('data-value'))
        elem.classList.add('selected')
      }
  }
  sendGames(){
    this.auth.gamesList = this.add.gamesToAdd
    this.auth.secondStep = true
  }


}
