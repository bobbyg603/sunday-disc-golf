import { Course } from "./course.entity";
import { Score } from "./score.entity";
import { Player } from "./player.entity";

export class Scorecard {
    public id: string;
    constructor(public course: Course, public scores: Array<TeamScoresMap>) { }
}

export class TeamScoresMap {
    constructor(public players: Array<string>, public scores: Array<Score>) { }

    get totalScore(): string {
        return this.scores
            .map(score => score.score)
            .reduce((prev, current) => prev + current)
            .toString();
    }
}