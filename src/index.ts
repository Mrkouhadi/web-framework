import { User } from "./models/User";

const bryan = new User({name:"Bryan", age:30});

bryan.on("click", ()=>{
    console.log("event has been CLICKED 1 !");
})

bryan.on("click", ()=>{
    console.log("event has been CLICKED 2 !");
})

bryan.on("hover", ()=>{
    console.log("event has been HOVERED !");
})

bryan.trigger('click');