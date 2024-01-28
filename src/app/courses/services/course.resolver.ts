import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot,
} from '@angular/router';
import { Course } from '../model/course';
import { Observable } from 'rxjs';
import { CoursesService } from './courses.service';
import { inject } from '@angular/core';

export const courseResolver: ResolveFn<Course> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): Observable<Course> => {
  const courseUrl = route.paramMap.get('courseUrl');
  return inject(CoursesService).loadCourseByUrl(courseUrl);
};
