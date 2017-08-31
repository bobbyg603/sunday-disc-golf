import { Component, OnInit, Input } from '@angular/core';
import { Course } from "../../entities/course.entity";
import { Scorecard } from "../../entities/scorecard.entity";
import { Score } from "../../entities/score.entity";

@Component({
  selector: 'app-scorecard',
  templateUrl: './scorecard.component.html',
  styleUrls: ['./scorecard.component.css']
})
export class ScorecardComponent implements OnInit {

  @Input() course: Course;
  @Input() scores: Array<Array<Score>>;
  scorecard: Scorecard;

  ngOnInit(): void {
    this.resetScorecard();
  }

  resetScorecard() {
    this.scorecard = new Scorecard(this.course, this.scores);
  }
}
