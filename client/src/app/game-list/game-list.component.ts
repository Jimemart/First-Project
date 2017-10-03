import { Component, OnInit } from '@angular/core';
import { GetListService } from '../services/get-list.service'
@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {
  games;
  images = [];
  constructor( public myService:GetListService) { }

  ngOnInit() {
    this.myService.getList()
              .subscribe((games)=>{
                games.forEach(game =>{
                  game.cover.url = game.cover.url.split("t_thumb").join("t_thumb_2x")
                })
                this.games = games

              })
  }

}
