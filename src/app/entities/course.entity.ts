import { Hole } from "./hole.entity";

export class Course {
    constructor(public name: String,
        public holes: Array<Hole>,
        public street: String = "",
        public city: String = "",
        public state: String = "",
        public zip: String = "") { }
}