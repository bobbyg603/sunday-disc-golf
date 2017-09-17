import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCourseHoleComponent } from './add-course-hole.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { CourseBuilderEventService } from '../../../../services/coursebuilderevent.service';

describe('CourseHoleComponent', () => {
  let component: AddCourseHoleComponent;
  let fixture: ComponentFixture<AddCourseHoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        RouterTestingModule
      ],
      declarations: [ AddCourseHoleComponent ],
      providers: [ CourseBuilderEventService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCourseHoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
