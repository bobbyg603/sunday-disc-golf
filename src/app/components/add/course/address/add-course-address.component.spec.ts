import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCourseAddressComponent } from './add-course-address.component';
import { CourseBuilderEventService } from '../../../../services/coursebuilderevent.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('CourseAddressComponent', () => {
  let component: AddCourseAddressComponent;
  let fixture: ComponentFixture<AddCourseAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ BrowserAnimationsModule ],
      declarations: [ AddCourseAddressComponent ],
      providers: [ CourseBuilderEventService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCourseAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
