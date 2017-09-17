import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseAddressComponent } from './address.component';
import { CourseBuilderEventService } from '../../../../services/coursebuilderevent.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('CourseAddressComponent', () => {
  let component: CourseAddressComponent;
  let fixture: ComponentFixture<CourseAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ BrowserAnimationsModule ],
      declarations: [ CourseAddressComponent ],
      providers: [ CourseBuilderEventService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
