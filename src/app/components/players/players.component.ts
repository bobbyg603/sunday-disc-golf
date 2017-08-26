import { Component } from '@angular/core';
import { Player } from '../../entities/player.entity';
import { PlayersService } from '../../services/players.service';

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

  constructor(private playersService: PlayersService) {}

  addPlayer(username, password, firstName, lastName, email, phone, bio) {
    if(this.playerExists(username)) {
      this.currentError = username + " already exists!";
      return;
    }
    if(username == "") {
      this.currentError = "Please enter a username!";
      return;
    }
    if(password == "") {
      this.currentError = "Please enter a password!";
      return;
    }
    const player = new Player(username, password);
    player.firstName = firstName;
    player.lastName = lastName;
    player.email = email;
    player.phone = phone;
    player.bio = bio;
    this.players.push(player);
    this.resetCurrentError();
  }

  removePlayer(username) {
    if(username == '') {
      return;
    }
    if(!this.playerExists(username)) {
      this.currentError = username + " doesn't exist!";
      return;
    }
    this.players = this.players.filter(item => item.username !== username);
    this.resetCurrentError();
  }

  playerExists(username) {
    return this.players.filter(item => item.username == username).length >= 1;
  }

  resetCurrentError() {
    this.currentError = "";
  }
}
