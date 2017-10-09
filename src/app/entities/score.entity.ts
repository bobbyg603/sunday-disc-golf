import { Player } from "./player.entity";
import { Hole } from "./hole.entity";

export class Score {
    constructor(public hole: Hole, public score: number) { }    
}
