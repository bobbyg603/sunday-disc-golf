import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormArray, Validators, FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { Course } from '../../../entities/course.entity';
import { Address } from '../../../entities/address.entity';
import { CoursesService } from '../../../services/courses.service';
import { Router } from '@angular/router';
import { ScorecardsService } from '../../../services/scorecards.service';
import { Scorecard, TeamScoresMap } from '../../../entities/scorecard.entity';
import { Player } from '../../../entities/player.entity';
import { PlayersService } from '../../../services/players.service';
import { Subscription } from 'rxjs/Subscription';
import { Score } from '../../../entities/score.entity';

@Component({
  selector: 'add-scorecard',
  templateUrl: './add-scorecard.component.html',
  styleUrls: ['./add-scorecard.component.css']
})
export class AddScorecardComponent implements OnInit, OnDestroy {
  title = "New Scorecard";
  currentError = "";

  newScorecardForm: FormGroup;
  allCourses: Array<Course> = new Array<Course>();
  availableCourses: Array<Course> = new Array<Course>();
  availablePlayers: Array<Player> = new Array<Player>();
  holeNumber = 1;

  coursesListSubscription: Subscription;
  playersListSubscription: Subscription;
  scorecardCreateSubscription: Subscription;

  setupFormVisible = true;

  readonly TWO_DIGIT_SCORE_PATTERN = /^\b[1-9]{1}[0-9]{0,1}\b$/;

  constructor(private formBuilder: FormBuilder,
    private coursesService: CoursesService,
    private playersService: PlayersService,
    private scorecardsService: ScorecardsService,
    private router: Router) { }

  ngOnInit(): void {
    this.coursesListSubscription = this.coursesService.list().subscribe(courses => {
      this.availableCourses = <Array<Course>>courses;
      this.allCourses = <Array<Course>>courses;
    });
    this.playersListSubscription = this.playersService.list().subscribe(players => {
      this.availablePlayers = <Array<Player>>players;
    });
    this.newScorecardForm = this.createForm();
  }

  ngOnDestroy(): void {
    this.unsubscribeIfNotNull(this.coursesListSubscription);
    this.unsubscribeIfNotNull(this.playersListSubscription);
    this.unsubscribeIfNotNull(this.scorecardCreateSubscription);
  }

  unsubscribeIfNotNull(subscription: Subscription) {
    if(subscription) {
      subscription.unsubscribe();
    }
  }

  next() {
    if(this.setupFormVisible) {
      this.setupFormVisible = false;
    } else {
      this.addScore();
    }
  }

  done() {
    const course = <Course>(this.allCourses.find(course => course.name == this.courseName));
    const scores = <Array<TeamScoresMap>>(this.scoreMaps.value.map(scoreMap => new TeamScoresMap(scoreMap.team, scoreMap.scores.map(score => new Score(score.hole, parseInt(score.score))))));
    const scorecard = new Scorecard(course, scores);
    this.scorecardsService.create(scorecard).subscribe(result => {
      this.router.navigate(['scorecards']);
    });
    // TODO BG error handling
  }

  createForm(): FormGroup {
    return this.newScorecardForm = this.formBuilder.group({
      course: ["", Validators.required],
      scoreMaps: this.formBuilder.array([
        this.createScoreMap()
      ])
    })
  }

  createScoreMap(): FormGroup {
    return this.formBuilder.group({
      team: this.formBuilder.array([]),
      scores: this.formBuilder.array([
        this.createScore(this.holeNumber)
      ])
    })
  }

  createScore(holeNumber): FormGroup {
    return this.formBuilder.group({
      hole: this.formBuilder.control(holeNumber),
      score: this.formBuilder.control("", Validators.pattern(this.TWO_DIGIT_SCORE_PATTERN))
    });
  }

  addScore() {
    this.holeNumber++;
    this.scoreMaps.controls.forEach(scoreMap => {
      (<FormArray>(<FormArray>scoreMap).controls['scores']).push(this.createScore(this.holeNumber));
    });
  }

  addTeam() {
    this.scoreMaps.push(this.createScoreMap());
  }

  addPlayer(username: string) {
    this.currentTeam.push(this.formBuilder.control(username));
    this.availablePlayers = this.availablePlayers.filter(player => player.username != username);
  }

  get courseName() {
    return this.newScorecardForm.controls['course'].value;
  }

  get scoreMaps() {
    return this.newScorecardForm.get("scoreMaps") as FormArray;
  }

  get currentScoreMap() {
    return this.scoreMaps.at(this.scoreMaps.length - 1) as FormArray;
  }

  get teams() {
    return this.scoreMaps.value.map(map => map.team);
  }

  get currentTeam() {
    return this.currentScoreMap.get("team") as FormArray;
  }
}
