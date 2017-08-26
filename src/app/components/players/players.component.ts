import { Component } from '@angular/core';

@Component({
  selector: 'players-root',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent {
  title = 'Players';
  
  newPlayer = '';
  players = [];
  currentError = '';

  addPlayer(name) {
    if(this.playerExists(name)) {
      this.currentError = name + " already exists!";
      return;
    }
    this.players.push(name);
    this.resetCurrentError();
  }

  removePlayer(name) {
    if(!this.playerExists(name)) {
      this.currentError = name + " doesn't exist!";
      return;
    }
    this.players = this.players.filter(item => item !== name);
    this.resetCurrentError();
  }

  playerExists(name) {
    return this.players.includes(name);
  }

  resetCurrentError() {
    this.currentError = "";
  }
}
