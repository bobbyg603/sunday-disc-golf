import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService, LoginEvent, LoginEventType } from '../services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Sunday Disc Golf';
  navbarCollapsed: boolean = true;

  // TODO BG replace with async pipe
  isLoggedIn = false;
  
  constructor(private router: Router, private loginService: AuthenticationService) { }

  ngOnInit(): void {
    this.isLoggedIn = this.loginService.isAuthenticated();
    this.loginService.getObservable().subscribe((loginEvent) => this.onLoginChanged(loginEvent));
  }

  login() {
    if(!this.isLoggedIn) {
      this.router.navigate(['login']);
    } else {
      this.router.navigate(['scores']);
    }
  }

  logout() {
    this.loginService.logout();
  }

  onLoginChanged(loginEvent: LoginEvent) {
    this.isLoggedIn = loginEvent.type == LoginEventType.Login;
    this.router.navigate([loginEvent.redirectTo]);
  }
}
