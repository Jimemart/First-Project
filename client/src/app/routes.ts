import { Routes } from "@angular/router";
import { GameListComponent } from './game-list/game-list.component'
import { SignupComponent } from './signup/signup.component'
import { MultiformComponent } from './multiform/multiform.component'
import {LogInComponent} from './log-in/log-in.component'
import { ProfileComponent } from './profile/profile.component'

export const routes:Routes= [
  {path: '',component:MultiformComponent},
  {path: 'list', component:GameListComponent },
  {path: 'login', component: LogInComponent}
]
