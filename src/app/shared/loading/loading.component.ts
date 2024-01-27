import { Component, Input, OnInit } from '@angular/core';
import { LoadingService } from './loading.service';

@Component({
  selector: 'loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css'],
})
export class LoadingComponent implements OnInit {
  @Input() routing: boolean = false;

  constructor(public loadingService: LoadingService) {}

  ngOnInit() {}
}
