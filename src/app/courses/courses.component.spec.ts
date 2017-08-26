import { TestBed, async } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

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
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Courses');
  }));

  it('should display course list', async(() => {
    const fixture = TestBed.createComponent(CoursesComponent);
    const app = fixture.debugElement.componentInstance;
    const compiled = fixture.debugElement.nativeElement;
    const courseName = "Top of the Hill";
    const holes = createHoleArray();
    const course = new Course(courseName, holes);

    app.courses.push(course);
    fixture.detectChanges();

    expect(compiled.querySelector("li").textContent).toContain(courseName + " : " + holes.length);
  }));

  function createHoleArray(): Array<Hole> {
    const holes = new Array<Hole>();
    for(var i = 1; i <= 9; i++) {
      holes.push(new Hole(i, 3, 300));
    }
    return holes;
  }
});
