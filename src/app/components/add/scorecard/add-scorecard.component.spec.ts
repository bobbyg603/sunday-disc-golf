import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddScorecardComponent } from './add-scorecard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ScorecardsService } from '../../../services/scorecards.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('AddScorecardComponent', () => {
  let component: AddScorecardComponent;
  let fixture: ComponentFixture<AddScorecardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        HttpClientModule,
        RouterTestingModule
      ],
      declarations: [AddScorecardComponent],
      providers: [ScorecardsService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddScorecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
