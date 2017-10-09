import { Component, OnInit } from '@angular/core';
import { GroupService } from '../services/group.service'
import { ActivatedRoute } from '@angular/router'
import { AuthService } from '../services/auth.service'

@Component({
  selector: 'app-groups-page',
  templateUrl: './groups-page.component.html',
  styleUrls: ['./groups-page.component.css']
})
export class GroupsPageComponent implements OnInit {
  addGroup:boolean = false;
  profileId:string
  userGroups:Array<object> = []
  loggedUser:object
  constructor(private groupService: GroupService, private route:ActivatedRoute, private auth:AuthService) { }

  ngOnInit() {
    this.loggedUser = this.auth.user
    this.route.params
        .subscribe((params)=> {
          this.profileId = params['id']
          this.getUserGroups(this.profileId)
        })

  }

  addNewGroup(){
    this.addGroup = true;
  }

  getUserGroups(id){
    this.groupService.getUserGroups(id)
        .subscribe(groups =>{
          this.userGroups = groups
        })
  }

  newGroupSaved(val){
    this.addGroup = val
    this.route.params
        .subscribe((params)=> {
          this.profileId = params['id']
          this.getUserGroups(this.profileId)
        })
  }

}
