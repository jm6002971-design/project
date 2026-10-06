import { Injectable } from '@angular/core';
import {
  CanActivate,
  CanActivateChild,
  CanLoad,
  Route,
  UrlSegment,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';

import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { map, take } from 'rxjs/operators';

import { AppState } from '../core/appstates/appState';
import { LoginState } from '../core/appstates/loginstates/loginState';

@Injectable({
  providedIn: 'root'
})
export class RouteauthGuard implements CanActivate, CanActivateChild, CanLoad {

  constructor(private store: Store<AppState>, private router: Router) {}

  private checkLogin(): Observable<boolean> {
    return this.store.select("loginState").pipe(
      take(1),
      map((loginState: LoginState) => {

        if (loginState?.playerLoggedIn?.loggedIn) {
          return true;
        } else {
          this.router.navigate(['/home']);
          return false;
        }

      })
    );
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.checkLogin();
  }

  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.checkLogin();
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]
  ): Observable<boolean> {
    return this.checkLogin();
  }
}