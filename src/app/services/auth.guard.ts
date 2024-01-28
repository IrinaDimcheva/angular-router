import { Injectable, inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
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
  const router = inject(Router);

  return inject(AuthStore).isLoggedIn$.pipe(
    map((loggedIn) => (loggedIn ? true : router.parseUrl('/login')))
  );
};

// @Injectable()
// export class AuthGuard implements CanActivate {
//   constructor(private auth: AuthStore, private router: Router) {}

//   canActivate(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot
//   ): Observable<boolean | UrlTree> {
//     return this.auth.isLoggedIn$.pipe(
//       map((loggedIn) => (loggedIn ? true : this.router.parseUrl('/login')))
//     );
//   }
// }
