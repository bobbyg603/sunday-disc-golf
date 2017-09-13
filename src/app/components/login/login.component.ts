import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  currentError;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.resetCurrentError();
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
    this.loginService.login(username, password, "scores");
  }

  resetCurrentError() {
    this.currentError = " ";
  }
}
