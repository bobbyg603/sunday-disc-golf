import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Sunday Disc Golf';
  currentError = '';
  isLoggedIn = false;
  isCollapsed = true;
  
  constructor(private router: Router, private loginService: LoginService) {}
  
  ngOnInit(): void {
    this.isLoggedIn = this.loginService.isLoggedIn("todo bg token");
  }

  login() {
    if(!this.isLoggedIn) {
      this.router.navigate(['login']);
      // TODO BG replace with subscriber
      this.isLoggedIn = true;
    } else {
      this.router.navigate(['scores']);
    }
  }

  logout() {
    this.loginService.logout();
    // TODO BG replace with subscriber
    this.isLoggedIn = false;
    this.router.navigate(['home']);
  }
}
