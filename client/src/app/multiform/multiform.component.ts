import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service'

@Component({
  selector: 'app-multiform',
  templateUrl: './multiform.component.html',
  styleUrls: ['./multiform.component.css']
})
export class MultiformComponent implements OnInit {

  constructor(public auth:AuthService) { }

  ngOnInit() {
    
  }

}
