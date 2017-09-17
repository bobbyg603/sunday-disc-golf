import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCourseComponent } from './add-course.component';
import { RouterTestingModule } from '@angular/router/testing';
import { CourseBuilderEventService } from '../../../services/coursebuilderevent.service';
import { CoursesService } from '../../../services/courses.service';
import { HttpClientModule } from '@angular/common/http';

describe('AddCourseComponent', () => {
  let component: AddCourseComponent;
  let fixture: ComponentFixture<AddCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCourseComponent ],
      imports: [ 
        HttpClientModule,
        RouterTestingModule
      ],
      providers: [
        CourseBuilderEventService,
        CoursesService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
