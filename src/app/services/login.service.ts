import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

  readonly IS_LOGGED_IN_KEY = "isLoggedIn";

  constructor() { }

  login(username, password) {
    const token = "todo bg";
    sessionStorage.setItem(this.IS_LOGGED_IN_KEY, "true");
    return token;
  }

  logout() {
    sessionStorage.setItem(this.IS_LOGGED_IN_KEY, "false");
  }

  isLoggedIn(token) {
    // TODO BG implement
    return sessionStorage.getItem(this.IS_LOGGED_IN_KEY) == "true";
  }
}
