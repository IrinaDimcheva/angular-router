import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';

import { Course } from '../model/course';
import { CoursesService } from './courses.service';

export const courseResolver: ResolveFn<Course> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): Observable<Course> => {
  const courseUrl = route.paramMap.get('courseUrl');
  return inject(CoursesService).loadCourseByUrl(courseUrl);
};
