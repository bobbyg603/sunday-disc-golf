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

  constructor(private formBuilder: FormBuilder,
    private coursesService: CoursesService,
    private playersService: PlayersService) {}
  
  ngOnInit(): void {
    this.coursesService.list().subscribe(courses => {
      this.availableCourses = <Array<Course>>courses;
    });
    this.playersService.list().subscribe(players => {
      this.availablePlayers = <Array<Player>>players;
    });
    this.newScorecardForm = this.createForm();
  }

  createForm(): FormGroup {
    return this.newScorecardForm = this.formBuilder.group({
      course: ["", Validators.required],
      scoreMaps: this.formBuilder.array([
        this.formBuilder.group({
          team: this.formBuilder.array([]),
          scores: this.formBuilder.array([])
      })])
    })
  }

  addScore() {
    this.scores.push(this.formBuilder.group({
      hole: 1,
      score: 3
    }));
  }

  addTeam() {
    this.scoreMaps.push(this.formBuilder.group({
      team: this.formBuilder.array([]),
      scores: this.formBuilder.array([])
    }));
  }

  addPlayer(username: string) {
    this.team.push(this.formBuilder.control(username));
    this.availablePlayers = this.availablePlayers.filter(player => player.username != username);
  }

  get scoreMaps() {
    return this.newScorecardForm.get("scoreMaps") as FormArray;
  }

  get scoreMap() {
    return this.scoreMaps.at(this.scoreMaps.length-1) as FormArray;
  }

  get teams() {
    return this.scoreMaps.value.map(map => map.team);
  }

  get team() {
    return this.scoreMap.get("team") as FormArray;
  }

  get scores() {
    return this.scoreMap.get("scores") as FormArray;
  }
}
