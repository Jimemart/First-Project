import { Component, OnInit } from '@angular/core';
import { GroupService } from '../services/group.service'
import { AddGameService } from '../services/add-game.service'
import { ActivatedRoute } from '@angular/router'
import { AuthService } from '../services/auth.service'
import { ActivityService } from '../services/activity.service'

@Component({
  selector: 'app-single-group',
  templateUrl: './single-group.component.html',
  styleUrls: ['./single-group.component.css']
})
export class SingleGroupComponent implements OnInit {

  constructor(private group:GroupService,
              private route:ActivatedRoute,
              private add:AddGameService,
              private auth:AuthService,
              private act:ActivityService
              ) { }

  groupId:string
  groupInf:object
  usersInGroup:Array<string>
  groupUsers:Array<object>

  loggedUser:object = this.auth.user
  isUserInGroup:boolean = false

  ngOnInit() {
    this.auth.isLoggedIn()
        .subscribe(user =>{
          this.route.params
              .subscribe((params)=> {
                this.groupId = params['id']
                this.getGroupInfo(this.groupId)

              })
        })


  }

  getGroupInfo(id){
    this.group.getGroup(id)
        .subscribe(group =>{
          this.groupInf = group
          this.usersInGroup = this.groupInf['users']
          console.log(this.groupInf)
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
    this.group.addUser(this.usersInGroup, this.groupId)
          .subscribe(user =>{
            this.getGroupInfo(this.groupId)
            this.act.addNewAct(this.createObjforAct())
                    .subscribe()
          })
  }

  createObjforAct(){
    const newObj = {
      text:this.groupInf['groupname'],
      owner:this.loggedUser['_id'],
      image: this.groupInf['groupImage'],
      addedUser: this.groupInf['_id'],
      kind: 'GROUP'
    }
    return newObj
  }
}
