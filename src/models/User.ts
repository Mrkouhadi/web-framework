import { Attributes } from "./Attributes";
import { Eventing } from "./Eventing";
import { Sync } from "./Sync";

export interface UserProps {
    id?: number
    name?: string; // ? means optional
    age?: number;
}

const rootUrl = "http://localhost:3000/users"
// class User
export class User {
    public events: Eventing = new Eventing();
    public sync: Sync<UserProps> = new Sync<UserProps>(rootUrl);
    public attributes: Attributes<UserProps>;

    constructor(attrs: UserProps){
        this.attributes = new Attributes<UserProps>(attrs);
    }

    get on(){ // const user = new User({..}) _  user.on('click', ()=>{....})
        return this.events.on; // get a refrence of events.on method 
    }
    get trigger(){ 
        return this.events.trigger; 
    }
    get get(){ 
        return this.attributes.get; 
    }

}

