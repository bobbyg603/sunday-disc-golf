import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseNameComponent } from './name.component';
import { CourseBuilderEventService } from '../../../../services/coursebuilderevent.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('CourseNameComponent', () => {
  let component: CourseNameComponent;
  let fixture: ComponentFixture<CourseNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ BrowserAnimationsModule ],
      declarations: [ CourseNameComponent ],
      providers: [ CourseBuilderEventService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
