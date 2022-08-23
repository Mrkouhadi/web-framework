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

    constructor(private data: UserProps) { }

    get(propName: string): string | number {
        return this.data[propName] // return id/name/age of obj(user) in: new User(obj)
    }

    set(update: UserProps): void { // edit obj in: new User(obj)
        Object.assign(this.data, update) // it's like : this.data = update; override the data;
    }

}