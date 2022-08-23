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



}