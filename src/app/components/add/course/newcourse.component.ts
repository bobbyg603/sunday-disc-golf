import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { CourseBuilderEventService, CourseBuilderEvent, CourseBuilderEventType } from '../../../services/coursebuilderevent.service';
import { Hole } from '../../../entities/hole.entity';
import { CoursesService } from '../../../services/courses.service';
import { Course } from '../../../entities/course.entity';
import { Address } from '../../../entities/address.entity';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-newcourse',
  templateUrl: './newcourse.component.html',
  styleUrls: ['./newcourse.component.css']

})
export class NewCourseComponent implements OnInit, OnDestroy {

  title = "New Course";
  subscription: Subscription;
  courseAddress: Address;
  courseName: string;
  courseHoles: Array<Hole> = [];
  done: boolean = false;

  constructor(private courseBuilderEventService: CourseBuilderEventService,
    private coursesService: CoursesService,
    private router: Router) { }

  ngOnInit() {
    this.subscription = this.courseBuilderEventService.getObservable().subscribe((event) => {
      switch (event.type) {
        case CourseBuilderEventType.SetAddress: this.setAddress(event.data as Address); break;
        case CourseBuilderEventType.SetName: this.setName(event.data as string); break;
        case CourseBuilderEventType.AddHole: this.addHole(event.data as Hole); break;
        default:
          this.done = true;
          this.addHole(event.data as Hole);
          this.createCourse();
          this.navigateToCourses();
          break;
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  setName(name: string) {
    this.courseName = name;
    this.router.navigate(['courses/new/address']);
  }

  setAddress(location: Address) {
    this.courseAddress = location;
    this.navigateToNextHole();
  }

  addHole(hole: Hole) {
    this.courseHoles.push(hole);
    if (!this.done) {
      this.navigateToNextHole();
    }
  }

  navigateToNextHole() {
    const nextHoleNumber = this.courseHoles.length + 1;
    this.router.navigate(['courses/new/hole/' + nextHoleNumber])
  }

  navigateToCourses() {
    this.router.navigate(['courses']);
  }

  createCourse() {
    const newCourse = new Course(this.courseName,
      this.courseHoles,
      this.courseAddress.street,
      this.courseAddress.city,
      this.courseAddress.state,
      this.courseAddress.zip)
    this.coursesService.addCourse(newCourse);
  }
}
