import { Component, OnInit } from '@angular/core';
import { FormArray, Validators, FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { Course } from '../../../entities/course.entity';
import { Address } from '../../../entities/address.entity';
import { CoursesService } from '../../../services/courses.service';
import { Router } from '@angular/router';
import { ScorecardsService } from '../../../services/scorecards.service';
import { Scorecard, TeamScoresMap } from '../../../entities/scorecard.entity';
import { Player } from '../../../entities/player.entity';
import { PlayersService } from '../../../services/players.service';

@Component({
  selector: 'add-scorecard',
  templateUrl: './add-scorecard.component.html',
  styleUrls: ['./add-scorecard.component.css']
})
export class AddScorecardComponent implements OnInit {
  title = "New Scorecard";
  currentError = "";
  
  newScorecardForm: FormGroup;
  availableCourses: Array<Course>;
  availablePlayers: Array<Player>;

  courseNameInputVisible = true;
  teamInputVisible = false;
  addPlayerButtonVisible = false;
  addTeamButtonVisible = true;

  scoreMapsPatch: Array<TeamScoresMap> = [new TeamScoresMap([], [])];

  readonly PAR_NUMBER_PATTERN = "[2-7]";
  readonly ANY_NUMBER_PATTERN = "^[0-9]+$";
  readonly PLUS_OR_MINUS_NUMBER_PATTERN = "^[\+\-][0-9]+$";

  constructor(private formBuilder: FormBuilder,
    private coursesService: CoursesService,
    private playersService: PlayersService,
    private scorecardsService: ScorecardsService,
    private router: Router) { }

  ngOnInit() {
    this.coursesService.list().subscribe(courses => {
      this.availableCourses = <Array<Course>>courses;
    });
    this.playersService.list().subscribe(players => {
      this.availablePlayers = <Array<Player>>players;
    })
    this.createForm();
  }

  createForm() {
    this.newScorecardForm = this.formBuilder.group({
      course: ["", Validators.required],
      scoreMaps: this.formBuilder.array([])
    })
  }

  holeInputVisible(index) {
    return this.scoreMaps.length - 1 == index;
  }

  next() {
    if (this.newScorecardForm.valid) {
      if (this.courseNameInputVisible) {
        this.courseNameInputVisible = false;
        this.teamInputVisible = true;
      } else if (this.teamInputVisible) {
        this.teamInputVisible = false;
        this.addScore();
      } else {
        this.addScore();
      }
    }
  }

  done() {
    const courseFormAny = <any>this.newScorecardForm.value;
    const course = courseFormAny.course;
    const scores = courseFormAny.scores; // TODO BG coerce object type
    const newScorecard = new Scorecard(course, scores);
    this.scorecardsService.create(newScorecard).subscribe(response => {
      console.log(response);
      this.router.navigate(["/scorecards"]);
    });
  }

  addTeam() {
    // TODO BG move
    this.addPlayerButtonVisible = true;
    this.addTeamButtonVisible = false;
    this.scoreMaps.push(this.formBuilder.group({
      players: [[], Validators.required],
      scores: [[], Validators.nullValidator]
    }));
  }

  addPlayer(username: string) {
    const newPlayer = this.findPlayerByUsername(username);
    if(!this.scoreMapsPatch[this.scoreMapsPatch.length-1].players.length) {
      this.scoreMapsPatch = [new TeamScoresMap([newPlayer], [])];
    } else {
      this.scoreMapsPatch[this.scoreMapsPatch.length-1].players.push(newPlayer);
    }
    this.availablePlayers = this.availablePlayers.filter(player => player.username != username);
    this.updateScoreMaps();
  }

  findPlayerByUsername(username: string) {
    return this.availablePlayers.find(player => player.username == username);
  }

  updateScoreMaps() {
    this.scoreMaps.patchValue(this.scoreMapsPatch);
  }

  addScore() {

  }

  get scoreMaps(): FormArray {
    return this.newScorecardForm.get("scoreMaps") as FormArray;
  }

  get name(): FormControl {
    return this.newScorecardForm.get("name") as FormControl;
  }
}
