import { Component, OnInit } from '@angular/core';
import { Player } from "../../entities/player.entity";

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {

  title = "Leaderboard";
  statistics = Array<Statistic>();

  constructor() { }

  ngOnInit() {
    // TODO BG remove
    this.statistics.push(new Statistic("Aces", [
      new PlayerValuePair(new Player("bobbyg603", "password"), 9),
      new PlayerValuePair(new Player("lil jake", "password"), 10),
      new PlayerValuePair(new Player("saynotwice", "password"), 9001) 
    ]));

    this.statistics.push(new Statistic("Albatrosses", []));
    this.statistics.push(new Statistic("Eagles", []));
    this.statistics.push(new Statistic("Birdies", []));
    this.statistics.push(new Statistic("Pars", []));
    this.statistics.push(new Statistic("Average Score", []));
    
  }

}

class Statistic {
  constructor(public title: string, public rows: Array<PlayerValuePair>) { }

  getRowsDescending() {
    return this.rows.sort((a, b) => b.value - a.value);
  }
}

class PlayerValuePair {
  constructor(public player: Player, public value: number) { }
}