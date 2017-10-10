import { Routes } from "@angular/router";
import { GameListComponent } from './game-list/game-list.component'
import { SignupComponent } from './signup/signup.component'
import { MultiformComponent } from './multiform/multiform.component'
import {LogInComponent} from './log-in/log-in.component'
import { ProfileComponent } from './profile/profile.component'
import {IsLoggedInService } from './services/isLoggedIn.canactivate.service'
import { HomeComponent } from './home/home.component'
import { GamePageComponent } from './game-page/game-page.component'
import { GroupsPageComponent } from './groups-page/groups-page.component'
import { SingleGroupComponent } from './single-group/single-group.component'
import { WelcomeComponent } from './welcome/welcome.component'
import { BrowserComponent } from './browser/browser.component'

export const routes:Routes= [
  {path: '',component:WelcomeComponent},
  {path: 'signup', component:MultiformComponent},
  {path: 'list', component:GameListComponent },
  {path: 'login', component: LogInComponent},
  {path: 'profile/:id', component: ProfileComponent },
  {path: 'home', component: HomeComponent},
  {path: 'game/:id', component: GamePageComponent},
  {path: 'groups/:id', component: GroupsPageComponent},
  {path: 'group/:id', component: SingleGroupComponent},
  {path: 'browse', component: BrowserComponent}
]
