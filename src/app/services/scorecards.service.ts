import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Scorecard, TeamScoresMap } from '../entities/scorecard.entity';
import { Hole } from '../entities/hole.entity';
import { Course } from '../entities/course.entity';
import { Player } from '../entities/player.entity';
import { Score } from '../entities/score.entity';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { environment } from '../../environments/environment';

@Injectable()
export class ScorecardsService {
  
    readonly Scorecards_URL = environment.scorecardsUrl;
  
    constructor(private httpClient: HttpClient) { }
  
    create(scorecard: Scorecard): Observable<Object> {
      return this.httpClient.post(this.Scorecards_URL, scorecard);
    }
  
    get(id: string): Observable<Object>  {
      return this.httpClient.get(this.Scorecards_URL + "/" + id);
    }
  
    list(): Observable<Object>  {
      return this.httpClient.get(this.Scorecards_URL);
      // TODO BG remove
      // return Observable.of([this.createFakeScorecard()]);
    }
    createFakeScorecard(): Scorecard {
      const hole = new Hole(1, 3, 300);
      const holes = [hole];
      const course = new Course("foobar international", holes);
      const username1 = "foobar9";
      const username2 = "bobbyg603";
      const username3 = "lil_jake";
      const username4 = "saynotwice";
      const score = new Score(holes[0], 3);
      const scores = [score];
      return new Scorecard(course, [new TeamScoresMap([username1, username2], scores), new TeamScoresMap([username3, username4], scores)]);
    }
}
