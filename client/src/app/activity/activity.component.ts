import { Component, OnInit } from '@angular/core';
import { ActivityService } from '../services/activity.service'
import { AuthService } from '../services/auth.service'
import { ActivatedRoute } from '@angular/router'


@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {
  profileId:string
  userActivities:Array<object>

  constructor(private auth:AuthService,
              private act:ActivityService,
              private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params
        .subscribe(params =>{
          this.profileId = params['id']
          this.act.getActivitiesFromUser(this.profileId)
              .subscribe(acts => {
                this.userActivities = acts
                console.log(this.userActivities)
              })
        })
  }

}
