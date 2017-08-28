import { Injectable } from '@angular/core';
import { Player } from '../entities/player.entity';

@Injectable()
export class PlayersService {

  players: Array<Player> = new Array<Player>();

  constructor() {
    // TODO BG remove
    this.players.push(new Player("bobbyg603", "password"));
    this.players.push(new Player("lil jake", "password"));
  }

  addPlayer(player: Player) {
    this.players.push(player);
  }

  removePlayer(player: Player) {
    this.players = this.players.filter(item => item.username !== player.username);
  }

  getPlayers(): Array<Player> {
    return this.players;
  }
}
