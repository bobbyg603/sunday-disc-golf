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
  availableCourses: Array<Course> = new Array<Course>();
  availablePlayers: Array<Player> = new Array<Player>();
  holeNumber = 1;

  readonly TWO_DIGIT_SCORE_PATTERN = /\b[0-9]{1,2}\b/;

  constructor(private formBuilder: FormBuilder,
    private coursesService: CoursesService,
    private playersService: PlayersService) { }

  ngOnInit(): void {
    this.coursesService.list().subscribe(courses => {
      this.availableCourses = <Array<Course>>courses;
    });
    this.playersService.list().subscribe(players => {
      this.availablePlayers = <Array<Player>>players;
    });
    this.newScorecardForm = this.createForm();
  }

  next() {
    this.addScore();
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
