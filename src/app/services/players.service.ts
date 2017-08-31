import { Injectable } from '@angular/core';
import { Player } from '../entities/player.entity';

@Injectable()
export class PlayersService {

  players: Array<Player> = new Array<Player>();

  constructor() {
    // TODO BG remove
    const bobby = new Player("bobbyg603", "password");
    bobby.email = "bobbyg603@gmail.com";
    bobby.firstName = "bobby";
    bobby.lastName = "galli";
    bobby.phone = "999-999-9999";
    bobby.bio = "the best ever";
    const jake = new Player("lil jake", "password");
    jake.email = "jake@gmail.com";
    jake.firstName = "Jacob";
    jake.lastName = "Poirier";
    jake.phone = "555-555-5555";
    jake.bio = "also the best ever";
    this.players.push(bobby);
    this.players.push(jake);
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
