import { User } from "./models/User";

const bryan = new User({name:"Bryan", age:30});

bryan.on("click", ()=>{
    console.log("event has been CLICKED !");
})

bryan.on("click", ()=>{
    console.log("event has been CLICKED !");
})

bryan.on("hover", ()=>{
    console.log("event has been HOVERED !");
})

console.log(bryan);