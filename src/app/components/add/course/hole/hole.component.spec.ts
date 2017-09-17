import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseHoleComponent } from './hole.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { CourseBuilderEventService } from '../../../../services/coursebuilderevent.service';

describe('CourseHoleComponent', () => {
  let component: CourseHoleComponent;
  let fixture: ComponentFixture<CourseHoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        RouterTestingModule
      ],
      declarations: [ CourseHoleComponent ],
      providers: [ CourseBuilderEventService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseHoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
