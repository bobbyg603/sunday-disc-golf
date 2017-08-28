import { Course } from "./course.entity";
import { Score } from "./score.entity";

export class Scorecard {
    constructor(public course: Course, public scores: Array<Array<Score>>) { }
}
