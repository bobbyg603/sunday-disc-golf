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
    this.statistics.push(new Statistic("Coming Soon!", []));
    this.statistics.push(new Statistic("Wins", []));
    this.statistics.push(new Statistic("Win Percentage", []));
    this.statistics.push(new Statistic("Aces", []));
    this.statistics.push(new Statistic("Double Eagles", []));
    this.statistics.push(new Statistic("Eagles", []));
    this.statistics.push(new Statistic("Birdies", []));
    this.statistics.push(new Statistic("Pars", []));
    
    // this.statistics.push(new Statistic("Aces", [
    //   new PlayerValuePair(new Player("bobbyg603", "password"), 9),
    //   new PlayerValuePair(new Player("lil jake", "password"), 10),
    //   new PlayerValuePair(new Player("saynotwice", "password"), 9001) 
    // ]));
    // this.statistics.push(new Statistic("Albatrosses", [
    //   new PlayerValuePair(new Player("bobbyg603", "password"), 9),
    //   new PlayerValuePair(new Player("lil jake", "password"), 10),
    //   new PlayerValuePair(new Player("saynotwice", "password"), 9001) 
    // ]));
    // this.statistics.push(new Statistic("Eagles", [
    //   new PlayerValuePair(new Player("bobbyg603", "password"), 9),
    //   new PlayerValuePair(new Player("lil jake", "password"), 10),
    //   new PlayerValuePair(new Player("saynotwice", "password"), 9001) 
    // ]));
    // this.statistics.push(new Statistic("Birdies", [
    //   new PlayerValuePair(new Player("bobbyg603", "password"), 9),
    //   new PlayerValuePair(new Player("lil jake", "password"), 10),
    //   new PlayerValuePair(new Player("saynotwice", "password"), 9001) 
    // ]));
    // this.statistics.push(new Statistic("Pars", [
    //   new PlayerValuePair(new Player("bobbyg603", "password"), 9),
    //   new PlayerValuePair(new Player("lil jake", "password"), 10),
    //   new PlayerValuePair(new Player("saynotwice", "password"), 9001) 
    // ]));
    // this.statistics.push(new Statistic("Average Score", [
    //   new PlayerValuePair(new Player("bobbyg603", "password"), 20),
    //   new PlayerValuePair(new Player("lil jake", "password"), 19),
    //   new PlayerValuePair(new Player("saynotwice", "password"), 18) 
    // ]));
    
  }

}

class Statistic {
  constructor(public title: string, public rows: Array<PlayerValuePair>) { }

  getRowsDescending() {
    return this.rows.sort((a, b) => parseInt(b.value) - parseInt(a.value));
  }
}

class PlayerValuePair {
  constructor(public player: Player, public value: string) { }
}