import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CourseComponent } from './course/course.component';
import { courseResolver } from './services/course.resolver';
import { LessonsListComponent } from './lessons-list/lessons-list.component';
import { LessonDetailComponent } from './lesson/lesson-detail.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: ':courseUrl',
    component: CourseComponent,
    children: [
      { path: '', component: LessonsListComponent },
      { path: 'lessons/:lessonSeqNo', component: LessonDetailComponent },
    ],
    resolve: { course: courseResolver },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class CoursesRoutingModule {}
