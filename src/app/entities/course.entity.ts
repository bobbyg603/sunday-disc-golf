import { Hole } from "./hole.entity";

export class Course {
    constructor(public name: String, public holes: Array<Hole>) { }
}