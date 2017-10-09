import { Component, OnInit } from '@angular/core';
import { GroupService } from '../services/group.service'
import { ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-single-group',
  templateUrl: './single-group.component.html',
  styleUrls: ['./single-group.component.css']
})
export class SingleGroupComponent implements OnInit {

  constructor(private group:GroupService, private route:ActivatedRoute) { }
  groupId:string
  groupInf:object


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
          console.log(this.groupInf)
        })
  }

}
