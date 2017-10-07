import { Player } from "./player.entity";
import { Hole } from "./hole.entity";
import { Course } from "./course.entity";

export class Score {
    constructor(public course: Course, public hole: Hole, public score: number) { }    
}
