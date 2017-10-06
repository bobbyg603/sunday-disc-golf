import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Scorecard, PlayerScoresMap } from '../entities/scorecard.entity';
import { Hole } from '../entities/hole.entity';
import { Course } from '../entities/course.entity';
import { Player } from '../entities/player.entity';
import { Score } from '../entities/score.entity';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class ScorecardsService {
  
    readonly Scorecards_URL = "todobg";
  
    constructor(private httpClient: HttpClient) { }
  
    create(scorecard: Scorecard): Observable<Object> {
      const payload = {
        
      }
      return this.httpClient.post(this.Scorecards_URL + "/scorecards", payload);
    }
  
    get(id: string): Observable<Object>  {
      return this.httpClient.get(this.Scorecards_URL + "/scorecards" + "/" + id);
    }
  
    list(): Observable<Object>  {
      // TODO BG enable
      //return this.httpClient.get(this.Scorecards_URL + "/scorecards");
      return Observable.of([this.createFakeScorecard()]);
    }
    createFakeScorecard(): Scorecard {
      const hole = new Hole(1, 3, 300);
      const holes = [hole];
      const course = new Course("foobar international", holes);
      const player = new Player("foobar9", "foobar9");
      const players = [player];
      const score = new Score(player, holes[0], 3);
      const scores = [score];
      return new Scorecard(course, [new PlayerScoresMap(players[0], scores)]);
    }
}
