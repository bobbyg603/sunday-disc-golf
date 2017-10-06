import { Component, OnInit, OnDestroy } from '@angular/core';
import { Course } from '../../entities/course.entity';
import { Hole } from '../../entities/hole.entity';
import { Subscription } from 'rxjs/Subscription';
import { ScorecardsService } from '../../services/scorecards.service';
import { Scorecard } from '../../entities/scorecard.entity';

@Component({
  selector: 'app-scorecards',
  templateUrl: './scorecards.component.html',
  styleUrls: ['./scorecards.component.css']
})
export class ScorecardsComponent implements OnInit, OnDestroy {

  title = 'Scorecards';
  scorecards: Array<Scorecard> = new Array<Scorecard>();
  scorecardsListSubscription: Subscription;
  
  constructor(private scorecardService: ScorecardsService) { }

  ngOnInit(): void {
    this.scorecardsListSubscription = this.scorecardService.list().subscribe(scorecards => {
      this.scorecards = <Array<Scorecard>>scorecards;
    });
  }

  ngOnDestroy(): void {
    // this.coursesListSubscription.unsubscribe();
  }
}