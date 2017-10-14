import { TestBed, inject } from '@angular/core/testing';

import { ScorecardsService } from './scorecards.service';
import { HttpClientModule } from '@angular/common/http';

describe('ScorecardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [ScorecardsService]
    });
  });

  it('should be created', inject([ScorecardsService], (service: ScorecardsService) => {
    expect(service).toBeTruthy();
  }));
});
