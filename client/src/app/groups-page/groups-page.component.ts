import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-groups-page',
  templateUrl: './groups-page.component.html',
  styleUrls: ['./groups-page.component.css']
})
export class GroupsPageComponent implements OnInit {
  addGroup:boolean = false;
  constructor() { }

  ngOnInit() {
  }

}
