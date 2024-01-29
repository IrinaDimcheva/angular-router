import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanDeactivate,
  CanDeactivateFn,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { CourseComponent } from '../courses/course/course.component';

export const confirmExitGuard: CanDeactivateFn<CourseComponent> = (
  component: CourseComponent,
  currentRoute: ActivatedRouteSnapshot,
  currentState: RouterStateSnapshot,
  nextState: RouterStateSnapshot
): boolean => {
  return component.confirmExit();
};

// @Injectable()
// export class ConfirmExitGuard implements CanDeactivate<CourseComponent> {
//   canDeactivate(
//     component: CourseComponent,
//     currentRoute: ActivatedRouteSnapshot,
//     currentState: RouterStateSnapshot,
//     nextState: RouterStateSnapshot
//   ): boolean {
//     return component.confirmExit();
//   }
// }
