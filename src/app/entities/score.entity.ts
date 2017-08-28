import { Player } from "./player.entity";
import { Hole } from "./hole.entity";

export class Score {
    constructor(public player: Player, public hole: Hole, public score: Number) { }    
}
