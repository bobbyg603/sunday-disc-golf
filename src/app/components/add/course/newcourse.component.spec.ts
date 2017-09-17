import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCourseComponent } from './newcourse.component';
import { RouterTestingModule } from '@angular/router/testing';
import { CourseBuilderEventService } from '../../../services/coursebuilderevent.service';
import { CoursesService } from '../../../services/courses.service';
import { HttpClientModule } from '@angular/common/http';

describe('NewCourseComponent', () => {
  let component: NewCourseComponent;
  let fixture: ComponentFixture<NewCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCourseComponent ],
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
    fixture = TestBed.createComponent(NewCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
