import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScorecardComponent } from './scorecard.component';
import { Course } from "../../entities/course.entity";
import { Hole } from "../../entities/hole.entity";
import { Score } from "../../entities/score.entity";
import { Scorecard, PlayerScoresMap } from "../../entities/scorecard.entity";
import { Player } from "../../entities/player.entity";

describe('ScorecardComponent', () => {
  let component: ScorecardComponent;
  let fixture: ComponentFixture<ScorecardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScorecardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScorecardComponent);
    component = fixture.componentInstance;
    component.course = new Course("foobar international", new Array<Hole>());
    component.scores = new Array<PlayerScoresMap>();
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should display players', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    const holeNumber = 1;
    const holePar = 3;
    const holeDistance = 300;
    const holes = createFakeHoles(18, holePar, holeDistance);
    const playerUsername = "bobbyg603";
    const playerPassword = "password";
    const fakePlayer = createFakePlayer(playerUsername, playerPassword);
    const fakeCourse = createFakeCourse("foobar international", holes);
    const fakeScores = createFakeScores(fakePlayer, 18);
    component.course = fakeCourse;
    component.scores = [new PlayerScoresMap(fakePlayer, fakeScores)];
    component.resetScorecard();
    fixture.detectChanges();
    expect(compiled.querySelector("table").textContent).toContain(fakePlayer.username);
  }));

  // TODO BG move to common test item factory area
  function createFakeCourse(name, holes) : Course {
    return new Course(name, holes);
  }

  function createFakeHoles(numberOfHoles = 18, par = 3, distance = 200) : Array<Hole> {
    const holes = [];
    for(let i = 1; i <= numberOfHoles; i++) {
      holes.push(new Hole(i, par, distance));
    }
    return holes;
  }

  function createFakePlayer(username, password) : Player {
    return new Player(username, password);
  }

  function createFakeScore(player, hole, score = 3) {
    return new Score(player, hole, score);
  }

  function createFakeScores(player, numberOfHoles) {
    const scores = [];
    for(let i = 0; i < numberOfHoles; i++) {
      scores.push(createFakeScore(player, new Hole(i+1, 3, 300), 3));
    }
    return scores;
  }

  function createFakeScorecard(course) {
    return new Scorecard(course, []);
  }
});
