import { TestBed, async } from '@angular/core/testing';

import { CoursesComponent } from './courses.component';

describe('CoursesComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CoursesComponent
      ],
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
});
