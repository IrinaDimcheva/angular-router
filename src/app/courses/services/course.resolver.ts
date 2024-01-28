import {
  ActivatedRouteSnapshot,
  Resolve,
  ResolveFn,
  RouterStateSnapshot,
} from '@angular/router';
import { Course } from '../model/course';
import { Observable } from 'rxjs';
import { CoursesService } from './courses.service';
import { Injectable, inject } from '@angular/core';

export const courseResolver: ResolveFn<Course> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): Observable<Course> => {
  const courseUrl = route.paramMap.get('courseUrl');
  return inject(CoursesService).loadCourseByUrl(courseUrl);
};

// @Injectable()
// export class CourseResolver implements Resolve<Course> {
//   constructor(private courses: CoursesService) {}

//   resolve(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot
//   ): Observable<Course> {
//     const courseUrl = route.paramMap.get('courseUrl');

//     return this.courses.loadCourseByUrl(courseUrl);
//   }
// }
