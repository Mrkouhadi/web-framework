import { User } from "./models/User";

const bryan = new User({name:"Bryan", age:30});
bryan.get("name");
bryan.set({name:"Mr.kouhadi"});


bryan.get("name");