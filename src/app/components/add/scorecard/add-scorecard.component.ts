import { Component, OnInit } from '@angular/core';
import { FormArray, Validators, FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { Course } from '../../../entities/course.entity';
import { Address } from '../../../entities/address.entity';
import { CoursesService } from '../../../services/courses.service';
import { Router } from '@angular/router';
import { ScorecardsService } from '../../../services/scorecards.service';
import { Scorecard, TeamScoresMap } from '../../../entities/scorecard.entity';

@Component({
  selector: 'add-scorecard',
  templateUrl: './add-scorecard.component.html',
  styleUrls: ['./add-scorecard.component.css']
})
export class AddScorecardComponent implements OnInit {
  title = "New Scorecard";
  currentError = "";

  newScorecardForm: FormGroup;

  nameInputVisible = true;
  addressInputVisible = false;

  readonly PAR_NUMBER_PATTERN = "[2-7]";
  readonly ANY_NUMBER_PATTERN = "^[0-9]+$";
  readonly PLUS_OR_MINUS_NUMBER_PATTERN = "^[\+\-][0-9]+$";

  constructor(private formBuilder: FormBuilder,
    private scorecardsService: ScorecardsService,
    private router: Router) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.newScorecardForm = this.formBuilder.group({
      course: ["", Validators.required],
      scorecards: this.formBuilder.array([])
    })
  }

  holeInputVisible(index) {
    return this.scorecards.length - 1 == index;
  }

  next() {
    if (this.newScorecardForm.valid) {
      if (this.nameInputVisible) {
        this.nameInputVisible = false;
        this.addressInputVisible = true;
      } else if (this.addressInputVisible) {
        this.addressInputVisible = false;
        this.addScorecard();
      } else {
        this.addScorecard();
      }
    }
  }

  done() {
    const courseFormAny = <any>this.newScorecardForm.value;
    const course = courseFormAny.course;
    const scorecards = courseFormAny.scorecards.map(scorecard => new Object({
      // TODO BG
    }));
    const newScorecard = new Scorecard(new Course("todobg", []), []);
    this.scorecardsService.create(newScorecard).subscribe(response => {
      console.log(response);
      this.router.navigate(["/scorecards"]);
    });
  }

  addScorecard() {
    this.scorecards.push(this.formBuilder.group({
      number: this.scorecards.length + 1,
      par: ['', Validators.compose([Validators.required, Validators.pattern(this.PAR_NUMBER_PATTERN)])],
      distance: ['', Validators.compose([Validators.required, Validators.pattern(this.ANY_NUMBER_PATTERN)])],
      elevation: ['', Validators.pattern(this.PLUS_OR_MINUS_NUMBER_PATTERN)],
      description: ['', Validators.nullValidator]
    }));
  }

  get scorecards(): FormArray {
    return this.newScorecardForm.get("scorecards") as FormArray;
  }

  get name(): FormControl {
    return this.newScorecardForm.get("name") as FormControl;
  }
}
