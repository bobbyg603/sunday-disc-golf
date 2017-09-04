import { Component, OnInit } from '@angular/core';
import { Course } from '../../entities/course.entity';
import { Player } from '../../entities/player.entity';
import { Score } from '../../entities/score.entity';
import { Scorecard, PlayerScoresMap } from '../../entities/scorecard.entity';
import { CoursesService } from '../../services/courses.service';
import { PlayersService } from '../../services/players.service';

@Component({
  selector: 'app-scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.css']
})
export class ScoresComponent implements OnInit {

  title = "Scores";
  availablePlayers = new Array<Player>();
  availableCourses = new Array<Course>();

  currentScorecard: Scorecard;
  selectedPlayer: Player;
  selectedCourse: Course;

  scorecards: Array<Scorecard> = new Array<Scorecard>();

  constructor(private coursesService: CoursesService, private playersService: PlayersService) { }

  ngOnInit() {
    this.resetAvailableCourses();
    this.resetAvailablePlayers();
    this.selectedCourse = this.availableCourses[0];
    this.selectedPlayer = this.availablePlayers[0];
    this.updateCurrentCourse();
  }

  resetAvailablePlayers() {
    this.availablePlayers = this.playersService.getPlayers();
  }

  resetAvailableCourses() {
    this.availableCourses = this.coursesService.getCourses();
  }

  updateCurrentCourse() {
    const currentCourse = this.availableCourses.filter(item => item.name == this.selectedCourse.name)[0];
    this.currentScorecard = new Scorecard(currentCourse, []);
    this.resetAvailablePlayers();
  }

  updateCurrentPlayers() {
    const currentCourse = this.currentScorecard.course;
    const newPlayerScores = [];
    for(var i = 1; i <= currentCourse.holes.length; i++) {
      newPlayerScores.push(new Score(this.selectedPlayer, currentCourse.holes[i], 0));
    }
    this.currentScorecard.scores.push(new PlayerScoresMap(this.selectedPlayer, newPlayerScores));
    this.availablePlayers = this.availablePlayers.filter(item => item.username != this.selectedPlayer.username);
  }

  getCurrentPlayers() {
    return this.currentScorecard.scores.map(scores => scores.player);
  }

  getPlayerIndex(player) {
    const playerScoreMap = this.currentScorecard.scores.filter(scoreMap => scoreMap.player.username == player.username)[0];
    return this.currentScorecard.scores.indexOf(playerScoreMap);
  }

  saveCurrentScorecard() {
    this.scorecards.push(this.currentScorecard);
  }
}