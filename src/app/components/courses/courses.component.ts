import { Component, OnInit, OnDestroy } from '@angular/core';
import { Course } from '../../entities/course.entity';
import { Hole } from '../../entities/hole.entity';
import { CoursesService } from '../../services/courses.service'
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'courses-root',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit, OnDestroy {

  title = 'Courses';
  courses: Array<Course> = new Array<Course>();
  coursesListSubscription: Subscription;
  
  constructor(private coursesService: CoursesService) { }

  ngOnInit(): void {
    this.coursesListSubscription = this.coursesService.list().subscribe(courses => {
      this.courses = <Array<Course>>courses;
    });
  }

  ngOnDestroy(): void {
    this.coursesListSubscription.unsubscribe();
  }
}