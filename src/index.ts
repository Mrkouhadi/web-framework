import axios from "axios";
import { User } from "./models/User";

const usr = User.buildUser({id:1, name:"Jhon Doe", age:90});

usr.on("change", ()=>{
    console.log('usr details have CHANGED !', usr.get('name'))
});
usr.fetch();


