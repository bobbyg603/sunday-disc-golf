import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCourseNameComponent } from './add-course-name.component';
import { CourseBuilderEventService } from '../../../../services/coursebuilderevent.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('CourseNameComponent', () => {
  let component: AddCourseNameComponent;
  let fixture: ComponentFixture<AddCourseNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ BrowserAnimationsModule ],
      declarations: [ AddCourseNameComponent ],
      providers: [ CourseBuilderEventService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCourseNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
