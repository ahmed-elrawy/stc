import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  constructor(
      private router: Router,
      private auth: AuthService
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

      const user = this.auth.isLogged();
      if (user) {
          // authorised so return true
          return true;
      }

      // not logged in so redirect to login page with the return url
      // { queryParams: { returnUrl: state.url }}
      this.router.navigate(['/login'],{ queryParams: { returnUrl: state.url }});
      return false;
  }
}

