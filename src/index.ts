import { User } from "./models/User";

const user = new User({id:3});

user.events.on("hover", ()=> console.log('Hoverrrred ! '))
user.events.trigger('hover')