import { TestBed, async } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CoursesService } from '../courses.service';
import { CoursesComponent } from './courses.component';
import { Course } from '../entities/course.entity';
import { Hole } from '../entities/hole.entity';

describe('CoursesComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CoursesComponent
      ],
      imports: [
        FormsModule
      ],
      providers: [
        CoursesService
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

  it('should display course list', async(() => {
    const fixture = TestBed.createComponent(CoursesComponent);
    const app = fixture.debugElement.componentInstance;
    const compiled = fixture.debugElement.nativeElement;
    const courseName = "Top of the Hill";
    const holes = createHoleArray(18);
    const course = new Course(courseName, holes);

    app.currentCourse = course;
    app.addCourse(course.name);
    fixture.detectChanges();
    expect(compiled.querySelector("li").textContent).toContain(courseName + " : " + holes.length);
  }));

  it('should remove course if removeCourse is called with a valid course name', async(() => {
    const fixture = TestBed.createComponent(CoursesComponent);
    const app = fixture.debugElement.componentInstance;
    const compiled = fixture.debugElement.nativeElement;
    const courseName = "Top of the Hill";
    const holes = createHoleArray(18);
    const course = new Course(courseName, holes);

    app.courses.push(course);
    app.removeCourse(courseName);
    expect(app.courses.length).toEqual(0);
  }));

  it('should display an error if addCourse is called with empty name', async(() => {
    const fixture = TestBed.createComponent(CoursesComponent);
    const app = fixture.debugElement.componentInstance;
    const compiled = fixture.debugElement.nativeElement;
    
    app.addCourse("");
    fixture.detectChanges();
    expect(compiled.querySelector("#currentError").textContent).toContain("Course name can't be empty!");
  }));

  it('should display an error if removeCourse is called with course name that does not exist', async(() => {
    const fixture = TestBed.createComponent(CoursesComponent);
    const app = fixture.debugElement.componentInstance;
    const compiled = fixture.debugElement.nativeElement;
    const courseName = "Henniker";
    
    app.removeCourse(courseName);
    fixture.detectChanges();
    expect(compiled.querySelector("#currentError").textContent).toContain(courseName + " doesn't exist!");
  }));

  function createHoleArray(numberOfHoles: Number): Array<Hole> {
    const holes = new Array<Hole>();
    for(var i = 1; i <= numberOfHoles; i++) {
      holes.push(new Hole(i, 3, 300));
    }
    return holes;
  }
});
