import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { environment } from '../../environments/environment';

@Injectable()
export class AuthenticationService {

  readonly TOKEN_KEY = "token";
  readonly AUTH_URL = environment.authUrl;

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
    this.httpClient
      .post(this.AUTH_URL + "/player", {
        username,
        password
      })
      .subscribe(data => {
        if (data.hasOwnProperty("token")) {
          const response = <AuthenticateResponse>data;
          this.setToken(response.token);
          this.loginServiceEventSubject.next(new LoginEvent(LoginEventType.Login, "login success", redirectTo));
        } else {
          throw new Error("Invalid login response. Data:\n" + JSON.stringify(data));
        }
      }, error => {
        const message = (<AuthenticateResponse>(error.error)).message || "Invalid request";
        this.loginServiceEventSubject.next(new LoginEvent(LoginEventType.Error, message, "login"));
      });
  }

  logout() {
    this.removeToken();
    this.loginServiceEventSubject.next(new LoginEvent(LoginEventType.Logout, "logout success", "home"));
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
  Logout,
  Error
}

export class LoginEvent {
  constructor(public type: LoginEventType, public message: string, public redirectTo: string) { }
}

// TODO BG move
export class AuthenticateResponse {
  public success: boolean;
  public message: string;
  public token: string;
}