import { Component, OnInit } from '@angular/core';
import { Course } from '../entities/course.entity';
import { Hole } from '../entities/hole.entity';

@Component({
  selector: 'courses-root',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  title = 'Courses';
  currentError = '';
  holeSelectOptions: Array<number> = [
    9,
    18
  ];
  
  currentHoleCount: number = this.holeSelectOptions[1];
  currentCourse: Course;
  courses: Array<Course> = new Array<Course>();
  
  ngOnInit(): void {
    this.updateCourse()
  }

  updateCourse() {
    this.currentHoleCount = +this.currentHoleCount;
    const holes = new Array<Hole>();
    for (var i = 1; i <= this.currentHoleCount; i++) {
      holes.push(new Hole(i, 0, 0));
    }
    this.currentCourse = new Course('', holes);
  }

  addCourse(name) {
    if (name === "") {
      this.currentError = "Course name can't be empty!";
      return
    }
    if (this.courseExists(name)) {
      this.currentError = name + ' already exists!';
      return;
    }
    this.currentCourse.name = name;
    this.courses.push(this.currentCourse);
    this.resetCurrentError();
  }

  removeCourse(name) {
    if (name === "") {
      return;
    }
    if (!this.courseExists(name)) {
      this.currentError = name + ' doesn\'t exist!';
      return;
    }
    this.courses = this.courses.filter(item => item.name !== name);
    this.resetCurrentError();
  }

  courseExists(name) {
    return this.courses.filter(item => item.name === name).length >= 1;
  }

  resetCurrentError() {
    this.currentError = '';
  }
}