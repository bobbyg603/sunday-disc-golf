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
}
