import { Component } from '@angular/core';

@Component({
  selector: 'courses-root',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  title = 'Courses';
  
  newCourse = '';
  courses = [];
  currentError = '';

  addCourse(name) {
    if(this.courseExists(name)) {
      this.currentError = name + " already exists!";
      return;
    }
    this.courses.push(name);
    this.resetCurrentError();
  }

  removeCourse(name) {
    if(!this.courseExists(name)) {
      this.currentError = name + " doesn't exist!";
      return;
    }
    this.courses = this.courses.filter(item => item !== name);
    this.resetCurrentError();
  }

  courseExists(name) {
    return this.courses.includes(name);
  }

  resetCurrentError() {
    this.currentError = "";
  }
}
