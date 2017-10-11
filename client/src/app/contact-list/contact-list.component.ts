import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service'
import { AddGameService } from  '../services/add-game.service'
import {Router} from '@angular/router'

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  user:object
  contacts:Array<object>
  constructor(private auth:AuthService, private add:AddGameService, private router: Router) { }

  ngOnInit() {
    this.auth.isLoggedIn()
        .subscribe(user => {
          this.user = user
          this.add.searchProfile(this.user['_id'])
                .subscribe(user =>{
                  this.contacts = user.friends
                })
        })
  }

  navigateToRoom(elem, id){
    const arrNames = [elem.toLowerCase(), this.user['username'].toLowerCase()]
    const roomName = arrNames.sort().join('')
    this.router.navigate(['/chat', roomName, id])
  }

}
