import { Component, OnInit, Input } from '@angular/core';
import { Course } from '../../../entities/course.entity';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  @Input() course: Course;

  constructor() { }

  ngOnInit() {
  }

  getTotalPar() {
    return this.course.holes
      .map(hole => hole.par)
      .reduce((previous, current) => previous + current);
  }

  getTotalDistance() {
    return this.course.holes
      .map(hole => hole.distance)
      .reduce((previous, current) => previous + current);
  }
}
