import { TestBed, async } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CoursesService } from '../../services/courses.service';
import { CoursesComponent } from './courses.component';
import { Course } from '../../entities/course.entity';
import { Hole } from '../../entities/hole.entity';
import { CourseComponent } from './course/course.component';
import { HttpClientModule } from '@angular/common/http';

class MockCourseService extends CoursesService {
  courses = [];
}

describe('CoursesComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CourseComponent,
        CoursesComponent
      ],
      imports: [
        FormsModule,
        HttpClientModule
      ],
      providers: [
        { provide: CoursesService, useClass: MockCourseService }
      ]
    }).compileComponents();
  }));

  it('should create the component', async(() => {
    const fixture = TestBed.createComponent(CoursesComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'Courses'`, async(() => {
    const fixture = TestBed.createComponent(CoursesComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Courses');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(CoursesComponent);
    const compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
    expect(compiled.querySelector('h1').textContent).toContain('Courses');
  }));

  it('should display a list of courses', async(() => {
    const fixture = TestBed.createComponent(CoursesComponent);
    const compiled = fixture.debugElement.nativeElement;
    const app = fixture.debugElement.componentInstance;
    app.courses = createFakeCourses();
    fixture.detectChanges();
    app.courses.forEach(course =>  {
      expect(compiled.querySelector('#coursesComponentRoot').textContent).toContain(course.name);
    });
  }));

  function createFakeCourses() {
    const courses = [];
    courses.push(new Course("Top of the Hill", [
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
    courses.push(new Course("Henniker", [
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
    courses.push(new Course("Other Course", [
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
    return courses;
  }
});
