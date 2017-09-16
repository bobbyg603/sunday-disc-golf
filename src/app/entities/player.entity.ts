export class Player {
    public bio: String = "";

    constructor(public username: String,
        public password: String,
        public firstName: String = "",
        public lastName: String = "",
        public email: String = "", 
        public phone: String = "") { }
}
