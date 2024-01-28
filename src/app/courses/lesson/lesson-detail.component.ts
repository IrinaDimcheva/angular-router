import { Component, OnInit } from '@angular/core';
import { LessonDetail } from '../model/lesson-detail';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'lesson',
  templateUrl: './lesson-detail.component.html',
  styleUrls: ['./lesson-detail.component.css'],
})
export class LessonDetailComponent implements OnInit {
  // lesson$: Observable<LessonDetail>;
  lesson: LessonDetail;

  constructor(private route: ActivatedRoute) {
    console.log('Created LessonDetailComponent...');
  }

  ngOnInit() {
    this.lesson = this.route.snapshot.data['lesson'];
  }
}
