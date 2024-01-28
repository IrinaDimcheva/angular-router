import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';

import { LessonDetail } from '../model/lesson-detail';
import { CoursesService } from './courses.service';

export const lessonDetailResolver: ResolveFn<LessonDetail> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): Observable<LessonDetail> => {
  const courseUrl = route.parent.paramMap.get('courseUrl'),
    lessonSeqNo = route.paramMap.get('lessonSeqNo');

  return inject(CoursesService).loadLessonDetail(courseUrl, lessonSeqNo);
};
