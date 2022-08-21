import { User } from "./models/User";

const user = new User({id:3});

user.set({name:'Mr.kouhadi', age:3333});

user.save();