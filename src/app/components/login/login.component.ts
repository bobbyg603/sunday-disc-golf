import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService, LoginEventType } from '../../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  currentError;

  constructor(private loginService: AuthenticationService, private router: Router) { }

  ngOnInit() {
    this.resetCurrentError();
    this.loginService.getObservable().subscribe(loginEvent => {
      if(loginEvent.type == LoginEventType.Error) {
        this.setCurrentError(loginEvent.message);
      }
    });
  }

  login(username, password) {
    if (!username) {
      this.currentError = "Please enter a username";
      return;
    }
    if (!password) {
      this.currentError = "Please enter a password";
      return;
    }
    this.resetCurrentError();
    this.loginService.login(username, password, "scorecards");
  }

  navigateToSignUp() {
    this.router.navigate(["signup"]);
  }

  resetCurrentError() {
    this.currentError = " ";
  }

  setCurrentError(message) {
    this.currentError = message;
  }
}
