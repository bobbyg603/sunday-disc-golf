import { Course } from "./course.entity";
import { Score } from "./score.entity";
import { Player } from "./player.entity";

export class Scorecard {
    constructor(public course: Course, public scores: Array<PlayerScoresMap>) { }
}

export class PlayerScoresMap {
    constructor(public player: Player, public scores: Array<Score>) { }
}