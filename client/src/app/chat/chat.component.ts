import { Component, OnInit } from '@angular/core';
import { ChaService } from '../services/cha.service';
import { AuthService } from '../services/auth.service'
import { ActivatedRoute } from '@angular/router'
import { AddGameService } from  '../services/add-game.service'

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  user:object
  roomName:string
  recieverUser:object
  reciever;
  convMessages:Array<object>
  constructor(private chatService: ChaService,
              private auth:AuthService,
              private route: ActivatedRoute,
              private add:AddGameService) {}

  ngOnInit() {
      this.auth.isLoggedIn()
        .subscribe(user =>{
          this.user = user
          this.route.params
              .subscribe(params =>{
                this.roomName = params['room']
                this.reciever = params['id']
                this.add.searchProfile(this.reciever)
                  .subscribe(user =>{
                    this.recieverUser = user
                    this.getMessages(this.roomName)
                    // setInterval(()=>{
                    //     this.getMessages(this.roomName)
                    // },1000)
                  })
              })
        })
    }

  sendMessage(text){
    const message = {
      message : text.value,
      sender: this.user['_id'],
      room : this.roomName,
      recieve: this.reciever
    }

    text.value = ''
    this.chatService.saveMessage(message)
                    .subscribe()
  }

  getMessages(roomName){
    this.chatService.getRoomMessages(roomName)
        .subscribe(messages =>{
          this.convMessages = []
          this.convMessages = messages
        })
  }


}
