import { Component, OnInit, Input } from '@angular/core';
import { Course } from "../../../entities/course.entity";
import { Scorecard, TeamScoresMap } from "../../../entities/scorecard.entity";
import { Score } from "../../../entities/score.entity";

@Component({
  selector: 'app-scorecard',
  templateUrl: './scorecard.component.html',
  styleUrls: ['./scorecard.component.css']
})
export class ScorecardComponent implements OnInit {

  @Input() scorecard: Scorecard;
  teamScoreMaps: Array<TeamScoresMap>;

  ngOnInit(): void {
    this.teamScoreMaps = this.scorecard.scores.map(score => new TeamScoresMap(score.players, score.scores));
  }

  get totalDistance(): string {
    return this.scorecard.course.holes.map(hole => hole.distance)
      .reduce((prev, current) => prev + current)
      .toString();
  }

  get totalPar(): string {
    return this.scorecard.course.holes.map(hole => hole.par)
      .reduce((prev, current) => prev + current)
      .toString();
  }

  get totalHoles(): string {
    return this.scorecard.course.holes.length.toString();
  }

  get dateTime(): string {
    return new Date(this.scorecard.id).toLocaleString();
  }
}
