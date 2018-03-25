import { Injectable } from '@angular/core';
import { Player } from '../entities/player.entity';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';

@Injectable()
export class PlayersService {

  readonly PLAYERS_URL = environment.playersUrl;

  constructor(private httpClient: HttpClient) { }

  create(player: Player): Observable<Object> {
    return this.httpClient.post(this.PLAYERS_URL, player);
  }

  delete(player: Player): Observable<Object> {
    const playerRoute = this.PLAYERS_URL + "/" + player.username;
    return this.httpClient.delete(playerRoute);
  }

  list(): Observable<Object> {
    return this.httpClient.get(this.PLAYERS_URL);
  }

  update(player: Player): Observable<Object> {
    const playerRoute = this.PLAYERS_URL + "/" + player.username;
    return this.httpClient.put(playerRoute, player);
  }
}
