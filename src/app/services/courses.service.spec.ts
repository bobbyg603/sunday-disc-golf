import { TestBed, inject } from '@angular/core/testing';

import { CoursesService } from './courses.service';
import { HttpClientModule } from '@angular/common/http';

describe('CoursesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
      providers: [CoursesService]
    });
  });

  it('should be created', inject([CoursesService], (service: CoursesService) => {
    expect(service).toBeTruthy();
  }));
});
