import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ScoresComponent } from './scores.component';
import { Course } from '../../entities/course.entity';
import { Hole } from '../../entities/hole.entity';
import { CoursesService } from '../../services/courses.service';
import { PlayersService } from '../../services/players.service';
import { Player } from "../../entities/player.entity";
import { Score } from "../../entities/score.entity";
import { Scorecard, PlayerScoresMap } from "../../entities/scorecard.entity";
import { ScorecardComponent } from "../../components/scorecard/scorecard.component";
import { HttpClientModule } from '@angular/common/http';

class MockPlayersService extends PlayersService {
  players = [];
}

class MockCoursesService extends CoursesService {
  courses = [];
}

describe('ScoresComponent', () => {
  let component: ScoresComponent;
  let fixture: ComponentFixture<ScoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        HttpClientModule
      ],
      declarations: [
        ScoresComponent,
        ScorecardComponent
      ],
      providers: [
        { provide: CoursesService, useClass: MockCoursesService },
        { provide: PlayersService, useClass: MockPlayersService}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should display selected course', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    const courseName = "Test Course";
    const holeNumber = 1;
    const holePar = 3;
    const holeDistance = 300;
    const holes = createFakeHoles(18, holePar, holeDistance);
    component.selectedCourse = createFakeCourse(courseName, holes);
    component.currentScorecard = createFakeScorecard(component.selectedCourse);
    fixture.detectChanges();
    const scorecardTable = compiled.querySelector("table");
    expect(scorecardTable.textContent).toContain(holeNumber);
    expect(scorecardTable.textContent).toContain(holePar);
    expect(scorecardTable.textContent).toContain(holeDistance);
  }));

  it('should display a list of available courses', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    const courseSelectElement = compiled.querySelector("#courseSelect");
    const courses = []
    courses.push(createFakeCourse("foobar international", createFakeHoles(18, 3, 300)));
    courses.push(createFakeCourse("nullref hallow", createFakeHoles(9, 3, 300)));
    courses.forEach(course => component.availableCourses.push(course));
    fixture.detectChanges();
    expect(courseSelectElement.textContent).toContain(courses[0].name);
    expect(courseSelectElement.textContent).toContain(courses[1].name);
  }));

  it('should display a list of available players', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    const players = []
    players.push(createFakePlayer("captainbackspin", "password"));
    players.push(createFakePlayer("bobbybooey", "password"));
    players.forEach(player => component.availablePlayers.push(player));
    component.selectedCourse = createFakeCourse("foobar international", createFakeHoles(18, 3, 300));
    component.currentScorecard = createFakeScorecard(component.selectedCourse);
    fixture.detectChanges();
    const playerSelectElement = compiled.querySelector("#playerSelect");
    expect(playerSelectElement.textContent).toContain(players[0].username);
    expect(playerSelectElement.textContent).toContain(players[1].username);
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

  function createFakeScorecard(course) {
    return new Scorecard(course, new Array<PlayerScoresMap>());
  }
});
