import { TestBed, inject } from '@angular/core/testing';

import { PlayersService } from './players.service';
import { HttpClientModule } from '@angular/common/http';

describe('PlayersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [PlayersService]
    });
  });

  it('should be created', inject([PlayersService], (service: PlayersService) => {
    expect(service).toBeTruthy();
  }));
});
