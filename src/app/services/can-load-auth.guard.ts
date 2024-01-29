import { Injectable, inject } from '@angular/core';
import {
  CanLoad,
  CanMatchFn,
  Route,
  Router,
  UrlSegment,
} from '@angular/router';
import { Observable } from 'rxjs';
import { first, tap } from 'rxjs/operators';
import { AuthStore } from './auth.store';

export const canLoadAuthGuard: CanMatchFn = (
  route: Route,
  segments: UrlSegment[]
): Observable<boolean> => {
  const router = inject(Router);
  return inject(AuthStore).isLoggedIn$.pipe(
    first(),
    tap((loggedIn) => {
      if (!loggedIn) {
        router.navigateByUrl('/login');
      }
    })
  );
};

// @Injectable()
// export class CanLoadAuthGuard implements CanLoad {
//   constructor(private auth: AuthStore, private router: Router) {}

//   canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> {
//     return this.auth.isLoggedIn$.pipe(
//       first(),
//       tap((loggedIn) => {
//         if (!loggedIn) {
//           this.router.navigateByUrl('/login');
//         }
//       })
//     );
//   }
// }
