import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newPlayer = '';
  title = 'Sunday Disc Golf';
  players = [];
  currentError = '';

  addPlayer(name) {
    if(this.players.includes(name)) {
      this.currentError = name + ' already exists!';
      return;
    }
    this.players.push(name);
  }
}
