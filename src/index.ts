import { User } from "./models/User";
import { UserForm } from "./views/UserForm";

// The user and root 
const user = User.buildUser({name:"kouhadi aboubakr essaddik", age:31})
const root = document.getElementById("root");

// generate a new user form
if(root){
    const userForm = new UserForm(root, user)
    //  render that form
    userForm.render();
}else{
    throw new Error("Can't find the root element ! please make sure your added a root a element in the html file")
}