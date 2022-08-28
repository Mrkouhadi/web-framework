import { Eventing } from "./Eventing";
import { User } from "./User";

export class Collection {
    Models: User[] = [];
    Events: Eventing = new Eventing();
 
    get on(){
        return this.Events.on;
    }
    get trigget(){
        return this.Events.trigger;
    }
}