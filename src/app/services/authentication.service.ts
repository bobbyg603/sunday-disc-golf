import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AuthenticationService {

  readonly TOKEN_KEY = "isLoggedIn";
  readonly AUTH_URL = "https://5y0w2j7jyl.execute-api.us-east-1.amazonaws.com/prod/authenticate";
  
  loginServiceEventSubject: Subject<LoginEvent> = new Subject<LoginEvent>();

  constructor(private httpClient: HttpClient) { }

  getObservable() {
    return this.loginServiceEventSubject.asObservable();
  }

  isAuthenticated() {
    // TODO BG implement
    return !!sessionStorage.getItem(this.TOKEN_KEY);
  }

  login(username, password, redirectTo) {
    const payload = {
      user: {
        username,
        password
      }
    };
    this.httpClient.post(this.AUTH_URL, payload)
      .subscribe(data => {
        const isValid = data.hasOwnProperty("success")
          && data.hasOwnProperty("message")
          && data.hasOwnProperty("token")
        if (isValid) {
          const response = <AuthenticateResponse>data;
          this.setToken(response.token);
          this.loginServiceEventSubject.next(new LoginEvent(LoginEventType.Login, redirectTo));
        } else {
          throw new Error("Invalid login response. Data:\n" + JSON.stringify(data));
        }
      });
  }

  logout() {
    this.removeToken();
    this.loginServiceEventSubject.next(new LoginEvent(LoginEventType.Logout, "home"));
  }

  removeToken() {
    sessionStorage.removeItem(this.TOKEN_KEY);
  }

  setToken(token) {
    sessionStorage.setItem(this.TOKEN_KEY, token);
  }
}

export enum LoginEventType {
  Login,
  Logout
}

export class LoginEvent {
  constructor(public type: LoginEventType, public redirectTo: string) {}
}

// TODO BG move
export class AuthenticateResponse {
  public success: boolean;
  public message: string;
  public token: string;
}