import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Course } from '../../entities/course.entity';
import { Hole } from '../../entities/hole.entity';
import { CoursesService } from '../../services/courses.service';
import { PlayersService } from '../../services/players.service';
import { Player } from "../../entities/player.entity";
import { Score } from "../../entities/score.entity";
import { Scorecard, PlayerScoresMap } from "../../entities/scorecard.entity";
import { ScorecardComponent } from "../../components/scorecards/scorecard/scorecard.component";
import { ScorecardsComponent } from "../../components/scorecards/scorecards.component";
import { HttpClientModule } from '@angular/common/http';
import { ScorecardsService } from '../../services/scorecards.service';

class MockPlayersService extends PlayersService {
  players = [];
}

class MockCoursesService extends CoursesService {
  courses = [];
}

describe('ScorecardsComponent', () => {
  let component: ScorecardsComponent;
  let fixture: ComponentFixture<ScorecardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        HttpClientModule
      ],
      declarations: [
        ScorecardsComponent,
        ScorecardComponent
      ],
      providers: [
        ScorecardsService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScorecardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'Scorecards'`, async(() => {
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Scorecards');
  }));

  it('should render title in a h1 tag', async(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Scorecards');
  }));
});
