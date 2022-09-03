import { User } from "./models/User";
import { UserEdit } from "./views/UserEdit";

// The user and root 
const user = User.buildUser({name:"kouhadi aboubakr essaddik", age:31})
const root = document.getElementById("root");

// generate a new user edit
if(root){
    const userEdit = new UserEdit(root, user)
    userEdit.render();
    console.log(userEdit);
    
}else{
    throw new Error("Can't find the root element ! please make sure your added a root a element in the html file")
} 