import { TestBed, inject } from '@angular/core/testing';

import { CourseBuilderEventService } from './coursebuilderevent.service';

describe('CourseBuilderEventService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CourseBuilderEventService]
    });
  });

  it('should be created', inject([CourseBuilderEventService], (service: CourseBuilderEventService) => {
    expect(service).toBeTruthy();
  }));
});
