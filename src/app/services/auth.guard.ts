import { Injectable, inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  CanActivateChildFn,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthStore } from './auth.store';

export const authGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): Observable<boolean | UrlTree> => {
  return checkIfAuthenticated();
};

export const childAuthGuard: CanActivateChildFn = (
  childRoute: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): Observable<boolean | UrlTree> => {
  return checkIfAuthenticated();
};

function checkIfAuthenticated() {
  const router = inject(Router);

  return inject(AuthStore).isLoggedIn$.pipe(
    map((loggedIn) => (loggedIn ? true : router.parseUrl('/login')))
  );
}

// @Injectable()
// export class AuthGuard implements CanActivate, CanActivateChild {
//   constructor(private auth: AuthStore, private router: Router) {}

//   canActivate(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot
//   ): Observable<boolean | UrlTree> {
//     return this.checkIfAuthenticated();
//   }

//   canActivateChild(
//     childRoute: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot
//   ): Observable<boolean | UrlTree> {
//     return this.checkIfAuthenticated();
//   }

//   private checkIfAuthenticated() {
//     return this.auth.isLoggedIn$.pipe(
//       map((loggedIn) => (loggedIn ? true : this.router.parseUrl('/login')))
//     );
//   }
// }
