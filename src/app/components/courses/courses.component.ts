import { Component, OnInit } from '@angular/core';
import { Course } from '../../entities/course.entity';
import { Hole } from '../../entities/hole.entity';
import { CoursesService } from '../../services/courses.service'

@Component({
  selector: 'courses-root',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  title = 'Courses';
  courses: Array<Course> = new Array<Course>();
  
  constructor(private coursesService: CoursesService) { }

  ngOnInit(): void {
    // TODO BG remove
    this.courses.push(new Course("Top of the Hill", [
      new Hole(1, 3, 300),
      new Hole(2, 3, 300),
      new Hole(3, 3, 300),
      new Hole(4, 3, 300),
      new Hole(5, 3, 300),
      new Hole(6, 3, 300),
      new Hole(7, 3, 300),
      new Hole(8, 3, 300),
      new Hole(9, 3, 300),
      new Hole(10, 3, 300),
      new Hole(11, 3, 300),
      new Hole(12, 3, 300),
      new Hole(13, 3, 300),
      new Hole(14, 3, 300),
      new Hole(15, 3, 300),
      new Hole(16, 3, 300),
      new Hole(17, 3, 300),
      new Hole(18, 3, 300),
    ], "68 SW Rd", "Canterbury", "NH", "03224"));
    this.courses.push(new Course("Henniker", [
      new Hole(1, 3, 300),
      new Hole(2, 3, 300),
      new Hole(3, 3, 300),
      new Hole(4, 3, 300),
      new Hole(5, 3, 300),
      new Hole(6, 3, 300),
      new Hole(7, 3, 300),
      new Hole(8, 3, 300),
      new Hole(9, 3, 300)
    ], "87 Grove Street", "Henniker", "NH", "03242"));
    this.courses.push(new Course("Other Course", [
      new Hole(1, 3, 300),
      new Hole(2, 3, 300),
      new Hole(3, 3, 300),
      new Hole(4, 3, 300),
      new Hole(5, 3, 300),
      new Hole(6, 3, 300),
      new Hole(7, 3, 300),
      new Hole(8, 3, 300),
      new Hole(9, 3, 300)
    ], "87 Grove Street", "Henniker", "NH", "03242"));
  }
}