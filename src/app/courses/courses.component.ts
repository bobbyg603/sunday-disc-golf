import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'courses-root',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  title = 'Courses';
  currentError = '';
  
  courses = [];
  hole: number = 18;
  holes: Array<number> = [
    9,
    18
  ];

  currentCourse: Array<Object>;

  ngOnInit(): void {
    this.updateCourse()
  }

  updateCourse() {
    this.hole = +this.hole;
    this.currentCourse = new Array<Object>();
    for (var i = 1; i <= this.hole; i++) {
      this.currentCourse.push({
        hole: i,
        par: 0
      });
    }
  }

  addCourse(name) {
    if (this.courseExists(name)) {
      this.currentError = name + " already exists!";
      return;
    }
    this.courses.push({ name, holes: this.currentCourse });
    this.resetCurrentError();
  }

  removeCourse(name) {
    if (!this.courseExists(name)) {
      this.currentError = name + " doesn't exist!";
      return;
    }
    this.courses = this.courses.filter(item => item.name !== name);
    this.resetCurrentError();
  }

  courseExists(name) {
    return this.courses.filter(item => item.name === name).length >= 1;
  }

  resetCurrentError() {
    this.currentError = "";
  }
}
