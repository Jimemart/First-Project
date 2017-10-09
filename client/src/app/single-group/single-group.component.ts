import { Component, OnInit } from '@angular/core';
import { GroupService } from '../services/group.service'
import { AddGameService } from '../services/add-game.service'
import { ActivatedRoute } from '@angular/router'
import { AuthService } from '../services/auth.service'

@Component({
  selector: 'app-single-group',
  templateUrl: './single-group.component.html',
  styleUrls: ['./single-group.component.css']
})
export class SingleGroupComponent implements OnInit {

  constructor(private group:GroupService,
              private route:ActivatedRoute,
              private add:AddGameService,
              private auth:AuthService
              ) { }

  groupId:string
  groupInf:object
  usersInGroup:Array<string>
  groupUsers:Array<object>

  loggedUser:object = this.auth.user
  isUserInGroup:boolean = false

  ngOnInit() {
    this.route.params
        .subscribe((params)=> {
          this.groupId = params['id']
          this.getGroupInfo(this.groupId)

        })

  }

  getGroupInfo(id){
    this.group.getGroup(id)
        .subscribe(group =>{
          this.groupInf = group
          this.usersInGroup = this.groupInf['users']
          this.groupUsers = []
          this.usersInGroup.forEach(user =>{
             this.add.searchProfile(user)
                    .subscribe(users =>{

                      this.groupUsers.push(users)
                    })
          })
          this.checkUser(this.loggedUser['_id'])
        })
  }

  checkUser(id){
    this.usersInGroup.forEach(user =>{
      if(user === this.loggedUser['_id']){
        this.isUserInGroup = true
      }
    })
  }

  userJoinsGroup(){
    this.usersInGroup.push(this.loggedUser['_id'])
    console.log(this.usersInGroup)
    this.group.addUser(this.usersInGroup, this.groupId)
          .subscribe(user =>{
            this.getGroupInfo(this.groupId)
          })
  }
}
