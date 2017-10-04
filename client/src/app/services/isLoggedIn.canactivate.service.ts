import { CanActivate } from '@angular/router';
import { Injectable }  from '@angular/core';
import { Observable }  from 'rxjs/Rx';
import { AuthService } from './auth.service'
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';

@Injectable()
export class IsLoggedInService implements CanActivate {

  constructor(public auth: AuthService, private router: Router) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (!this.auth.user) {
      this.router.navigate(['']);
      return false;
    }
    return true;
  }
}
