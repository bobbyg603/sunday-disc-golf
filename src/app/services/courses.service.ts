import { Injectable } from '@angular/core';
import { Course } from '../entities/course.entity';

@Injectable()
export class CoursesService {

  courses: Array<Course> = new Array<Course>();

  constructor() { }

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
