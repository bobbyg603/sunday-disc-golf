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
  currentError = '';
  holeSelectOptions: Array<number> = [
    9,
    18
  ];
  
  currentHoleCount: number = this.holeSelectOptions[1];
  currentCourse: Course;
  courses: Array<Course> = new Array<Course>();
  
  constructor(private coursesService: CoursesService) { }

  ngOnInit(): void {
    this.updateCurrentCourse();
    this.updateCourses();
  }

  updateCurrentCourse() {
    this.currentHoleCount = +this.currentHoleCount;
    const holes = new Array<Hole>();
    for (var i = 1; i <= this.currentHoleCount; i++) {
      holes.push(new Hole(i, 0, 0));
    }
    this.currentCourse = new Course('', holes);
  }

  updateCourses() {
    this.courses = this.coursesService.getCourses();
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
    if (this.currentCourse.holes.filter(hole => hole.distance == 0).length >= 1) {
      this.currentError = "Invalid distance value!"
      return;
    }
    if (this.currentCourse.holes.filter(hole => hole.par == 0).length >= 1) {
      this.currentError = "Invalid par value!";
      return;
    }
    this.currentCourse.name = name;
    this.coursesService.addCourse(this.currentCourse);
    this.resetCurrentError();
    this.updateCourses();
  }

  removeCourse(name) {
    if (name === "") {
      return;
    }
    if (!this.courseExists(name)) {
      this.currentError = name + ' doesn\'t exist!';
      return;
    }
    this.coursesService.removeCourse(this.currentCourse);
    this.resetCurrentError();
    this.updateCourses();
  }

  courseExists(name) {
    return this.courses.filter(item => item.name === name).length >= 1;
  }

  resetCurrentError() {
    this.currentError = '';
  }
}