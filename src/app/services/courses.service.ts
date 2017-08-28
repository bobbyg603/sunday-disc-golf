import { Injectable } from '@angular/core';
import { Course } from '../entities/course.entity';
import { Hole } from '../entities/hole.entity';

@Injectable()
export class CoursesService {

  courses: Array<Course> = new Array<Course>();

  constructor() {
    // TODO BG remove
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
    ]));
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
      new Hole(18, 3, 300)
    ]));
  }

  addCourse(course: Course) {
    this.courses.push(course);
  }

  removeCourse(course: Course) {
    this.courses = this.courses.filter(item => item.name !== course.name);
  }

  getCourses() : Array<Course> {
    return this.courses;
  }
}
