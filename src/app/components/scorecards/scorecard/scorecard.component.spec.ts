import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScorecardComponent } from './scorecard.component';
import { Course } from "../../../entities/course.entity";
import { Hole } from "../../../entities/hole.entity";
import { Score } from "../../../entities/score.entity";
import { Scorecard, TeamScoresMap } from "../../../entities/scorecard.entity";
import { Player } from "../../../entities/player.entity";
import { ReactiveFormsModule } from '@angular/forms';

describe('ScorecardComponent', () => {
  let component: ScorecardComponent;
  let fixture: ComponentFixture<ScorecardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [ScorecardComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScorecardComponent);
    component = fixture.componentInstance;
    component.scorecard = createFakeScorecard();
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should display scorecard', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
    expect(compiled.querySelector(".panel-heading").textContent).toContain("foobar international");
    expect(compiled.querySelector(".panel-body").textContent).toContain("foobar9");
  }));

  function createFakeScorecard(): Scorecard {
    const hole = new Hole(1, 3, 300);
    const holes = [hole];
    const course = new Course("foobar international", holes);
    const username = "foobar9";
    const usernames = [username];
    const score = new Score(holes[0], 3);
    const scores = [score];
    return new Scorecard(course, [new TeamScoresMap(usernames, scores)]);
  }
});
