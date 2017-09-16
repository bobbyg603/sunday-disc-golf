import { Component, OnInit } from '@angular/core';
import { Player } from '../../entities/player.entity';
import { PlayersService } from '../../services/players.service';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignUpComponent implements OnInit {

  currentError = "";

  constructor(private authenticationService: AuthenticationService, private playersService: PlayersService) { }

  ngOnInit() {
    this.resetCurrentError();
  }

  resetCurrentError() {
    this.currentError = "";
  }

  createAccount(username, password, firstName, lastName, email, phone) {
    if(!username) {
      this.currentError = "Please enter a username";
      return;
    }
    if(!password) {
      this.currentError = "Please enter a password";
      return;
    }

    const newPlayer = new Player(username, password, firstName, lastName, email, phone);
    this.playersService.create(newPlayer).subscribe(response => {
      console.log(response);
      this.authenticationService.login(newPlayer.username, newPlayer.password, "scores");
    });
  }
}
