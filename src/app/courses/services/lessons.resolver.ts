import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';

import { LessonSummary } from '../model/lesson-summary';
import { CoursesService } from './courses.service';

export const lessonsResolver: ResolveFn<LessonSummary[]> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): Observable<LessonSummary[]> => {
  const courseUrl = route.paramMap.get('courseUrl');

  return inject(CoursesService).loadAllCourseLessonsSummary(courseUrl);
};
