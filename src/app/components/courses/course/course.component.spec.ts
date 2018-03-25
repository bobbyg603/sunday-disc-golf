import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseComponent } from './course.component';
import { Hole } from '../../../entities/hole.entity';
import { Course } from '../../../entities/course.entity';

describe('CourseComponent', () => {
  let component: CourseComponent;
  let fixture: ComponentFixture<CourseComponent>;
  let compiled: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseComponent);
    component = fixture.componentInstance;
    component.course = createFakeCourse();
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should display the course name in the card-header', () => {
    compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector(".card-header").textContent).toContain(component.course.name);
  });

  it('should display the course address in the card-header', () => {
    compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector(".card-header").textContent).toContain(component.course.street);
    expect(compiled.querySelector(".card-header").textContent).toContain(component.course.city);
    expect(compiled.querySelector(".card-header").textContent).toContain(component.course.state);
    expect(compiled.querySelector(".card-header").textContent).toContain(component.course.zip);
  });

  it('should display the course statistics in the card-body', () => {
    compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector(".card-body").textContent).toContain(component.getTotalDistance());
    expect(compiled.querySelector(".card-body").textContent).toContain(component.getTotalPar());
  });

  function createFakeCourse() {
    return new Course("Henniker", [
      new Hole(1, 3, 300),
      new Hole(2, 3, 300),
      new Hole(3, 3, 300),
      new Hole(4, 3, 300),
      new Hole(5, 3, 300),
      new Hole(6, 3, 300),
      new Hole(7, 3, 300),
      new Hole(8, 3, 300),
      new Hole(9, 3, 300)
    ], "87 Grove Street", "Henniker", "NH", "03242")
  }
});
